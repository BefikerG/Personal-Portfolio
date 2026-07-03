import { useRef, useEffect, useState, useCallback } from 'react'

type GameObject = {
  x: number
  y: number
  w: number
  h: number
  type: 'bug' | 'error' | 'pipeline' | 'powerup'
  speed: number
  label: string
  color: string
}

const POWERUP_LABELS = ['Clean Code', 'Green Build', 'Deploy OK']
const BUG_LABELS = ['bug()', 'ERR_404', 'NULL_PTR', 'MEM_LEAK', 'SEGFAULT']
const ERROR_LABELS = ['Compile Error', 'Test Fail', 'Broken Pipe']
const PIPELINE_LABELS = ['CI/CD', 'Pipeline']

const INITIAL_DELAY = 60

export function BreakroomGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [, setScore] = useState(0)
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('breakroom_high') || '0')
  })
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'over'>('menu')
  const [message, setMessage] = useState('')

  const gameRef = useRef({
    player: { x: 200, y: 540, w: 60, h: 8 },
    objects: [] as GameObject[],
    frame: 0,
    spawnDelay: INITIAL_DELAY,
    lastSpawn: 0,
    keys: { left: false, right: false },
    score: 0,
    running: false,
  })

  const spawnObject = useCallback(() => {
    const g = gameRef.current
    const rand = Math.random()
    let type: GameObject['type']
    let label: string
    let color: string
    let w: number

    if (rand < 0.4) {
      type = 'bug'
      label = BUG_LABELS[Math.floor(Math.random() * BUG_LABELS.length)]
      color = '#ef4444'
      w = label.length * 8 + 16
    } else if (rand < 0.7) {
      type = 'error'
      label = ERROR_LABELS[Math.floor(Math.random() * ERROR_LABELS.length)]
      color = '#f59e0b'
      w = label.length * 8 + 16
    } else if (rand < 0.85) {
      type = 'pipeline'
      label = PIPELINE_LABELS[Math.floor(Math.random() * PIPELINE_LABELS.length)]
      color = '#a855f7'
      w = label.length * 8 + 16
    } else {
      type = 'powerup'
      label = POWERUP_LABELS[Math.floor(Math.random() * POWERUP_LABELS.length)]
      color = '#22c55e'
      w = label.length * 8 + 16
    }

    g.objects.push({
      x: Math.random() * (400 - w),
      y: -20,
      w: Math.max(w, 40),
      h: 20,
      type,
      speed: 1.5 + Math.random() * (g.spawnDelay < 30 ? 3 : 1.5),
      label,
      color,
    })
  }, [])

  const reset = useCallback(() => {
    const g = gameRef.current
    g.objects = []
    g.frame = 0
    g.spawnDelay = INITIAL_DELAY
    g.lastSpawn = 0
    g.score = 0
    g.player.x = 200
    g.keys = { left: false, right: false }
    setScore(0)
    setMessage('')
    setGameState('playing')
    g.running = true
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const g = gameRef.current

    const handleKey = (e: KeyboardEvent, down: boolean) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') g.keys.left = down
      if (e.key === 'ArrowRight' || e.key === 'd') g.keys.right = down
    }

    const onKeyDown = (e: KeyboardEvent) => handleKey(e, true)
    const onKeyUp = (e: KeyboardEvent) => handleKey(e, false)

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    let animId: number

    const gameLoop = () => {
      if (!g.running) {
        animId = requestAnimationFrame(gameLoop)
        return
      }

      g.frame++

      // Movement
      const speed = 4
      if (g.keys.left) g.player.x = Math.max(0, g.player.x - speed)
      if (g.keys.right) g.player.x = Math.min(400 - g.player.w, g.player.x + speed)

      // Spawn
      if (g.frame - g.lastSpawn > g.spawnDelay) {
        spawnObject()
        g.lastSpawn = g.frame
        if (g.spawnDelay > 15) g.spawnDelay = Math.max(15, g.spawnDelay - 0.5)
      }

      // Update objects
      const newObjects: GameObject[] = []
      for (const obj of g.objects) {
        obj.y += obj.speed
        obj.x += Math.sin(g.frame * 0.02 + obj.y * 0.01) * 0.3

        // Collision
        if (
          obj.y + obj.h > 540 &&
          obj.y < 540 + g.player.h &&
          obj.x < g.player.x + g.player.w &&
          obj.x + obj.w > g.player.x
        ) {
          if (obj.type === 'powerup') {
            g.score += 10
            setScore(g.score)
            if (g.score > 0 && g.score % 100 === 0) {
              setMessage(`✦ Achievement: ${g.score} points — Clean code wins! ✦`)
              setTimeout(() => setMessage(''), 3000)
            }
            continue
          } else {
            g.running = false
            setGameState('over')
            if (g.score > parseInt(localStorage.getItem('breakroom_high') || '0')) {
              localStorage.setItem('breakroom_high', g.score.toString())
              setHighScore(g.score)
              setMessage(`🏆 NEW HIGH SCORE: ${g.score}! — "Works on my machine" 🏆`)
            } else {
              setMessage(`Game Over — Score: ${g.score}. "It's not a bug, it's a feature."`)
            }
            break
          }
        }

        if (obj.y < 600) newObjects.push(obj)
      }
      g.objects = newObjects

      // Draw
      ctx.clearRect(0, 0, 400, 600)

      // Background grid
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 1
      for (let x = 0; x < 400; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, 600)
        ctx.stroke()
      }
      for (let y = 0; y < 600; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(400, y)
        ctx.stroke()
      }

      // Objects
      for (const obj of g.objects) {
        ctx.fillStyle = obj.color + '30'
        ctx.fillRect(obj.x, obj.y, obj.w, obj.h)

        ctx.strokeStyle = obj.color
        ctx.lineWidth = 1
        ctx.strokeRect(obj.x, obj.y, obj.w, obj.h)

        ctx.fillStyle = obj.color
        ctx.font = '10px "JetBrains Mono", monospace'
        ctx.textAlign = 'center'
        ctx.fillText(obj.label, obj.x + obj.w / 2, obj.y + 14)

        // Glow dot
        ctx.fillStyle = obj.color
        ctx.beginPath()
        ctx.arc(obj.x + obj.w / 2, obj.y - 3, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Player
      ctx.fillStyle = '#84cc1620'
      ctx.fillRect(g.player.x - 4, 536, g.player.w + 8, 16)
      ctx.fillStyle = '#84cc16'
      ctx.fillRect(g.player.x, 540, g.player.w, 8)
      ctx.fillStyle = '#22c55e'
      ctx.fillRect(g.player.x + 10, 540, g.player.w - 20, 3)

      // HUD
      ctx.fillStyle = 'rgba(255,255,255,0.3)'
      ctx.font = '10px "JetBrains Mono", monospace'
      ctx.textAlign = 'left'
      ctx.fillText(`SCORE: ${g.score}`, 10, 20)
      ctx.textAlign = 'right'
      ctx.fillText(`BEST: ${highScore}`, 390, 20)

      // Power bar
      ctx.fillStyle = 'rgba(255,255,255,0.05)'
      ctx.fillRect(10, 28, 100, 3)
      ctx.fillStyle = '#22c55e'
      ctx.fillRect(10, 28, Math.min(100, (g.score % 100) * 1), 3)

      animId = requestAnimationFrame(gameLoop)
    }

    animId = requestAnimationFrame(gameLoop)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [spawnObject, highScore])

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative border border-concrete-700 bg-concrete-950">
        <canvas ref={canvasRef} width={400} height={600} className="block" />

        {gameState === 'menu' && (
          <div className="absolute inset-0 flex items-center justify-center bg-concrete-950/90 backdrop-blur-sm">
            <div className="text-center px-8">
              <p className="text-industrial-green text-xs tracking-[0.3em] uppercase mb-4 font-mono">
                // The Merge Conflict Dodger
              </p>
              <h3 className="text-xl text-concrete-100 mb-2 font-mono">Terminal Hack</h3>
              <p className="text-concrete-500 text-xs mb-6 font-mono max-w-xs">
                Dodge bugs, errors, and broken pipelines. Catch clean code and green builds.
              </p>
              <div className="text-concrete-600 text-[10px] mb-6 font-mono space-y-1">
                <p>← → or A/D to move</p>
                <p>🟢 Power-ups = +10 pts</p>
                <p>🔴 Bugs = Game Over</p>
              </div>
              <button
                onClick={reset}
                className="px-6 py-3 border border-industrial-green text-industrial-green text-xs uppercase tracking-widest hover:bg-industrial-green/10 transition-colors font-mono"
                data-hoverable
              >
                [ Start Game ]
              </button>
              {highScore > 0 && (
                <p className="text-concrete-600 text-xs mt-4 font-mono">High Score: {highScore}</p>
              )}
            </div>
          </div>
        )}

        {gameState === 'over' && (
          <div className="absolute inset-0 flex items-center justify-center bg-concrete-950/90 backdrop-blur-sm">
            <div className="text-center px-8">
              <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4 font-mono">
                // SYSTEM_FAILURE
              </p>
              <p className="text-concrete-300 text-sm mb-6 font-mono">{message}</p>
              <button
                onClick={reset}
                className="px-6 py-3 border border-industrial-green text-industrial-green text-xs uppercase tracking-widest hover:bg-industrial-green/10 transition-colors font-mono"
                data-hoverable
              >
                [ Retry ]
              </button>
            </div>
          </div>
        )}
      </div>

      {gameState === 'playing' && message && (
        <p className="text-industrial-green text-xs font-mono animate-pulse">{message}</p>
      )}
    </div>
  )
}
