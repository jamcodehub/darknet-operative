import React, { useState, useEffect, useRef } from 'react';
import ASCIIText from './ASCIIText';

// ============= ASCII CHARACTER SYSTEM =============
const GHOST_FRAMES = {
  idle: `
    ██░░░░░░░░░░░░░░░██
    ██░░░░░░░░░░░░░░░██
    ░░██░░░░░░░░░░░██░░
    ░░░░██████████████░░
    ░░░░██░░░░░░░░██░░░░
    ░░░░██░░░░░░░░██░░░░
    ░░░░░░██░░░░██░░░░░░
    ░░░░░░░░████░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░`,
  
  speaking: `
    ██░░░░░░░░░░░░░░░██
    ██░░░░░░░░░░░░░░░██
    ░░██░░░░░░░░░░░██░░
    ░░░░██████████████░░
    ░░░░██░█░░░░█░░██░░░
    ░░░░██░░░░░░░░██░░░░
    ░░░░░░██░██░██░░░░░░
    ░░░░░░░░████░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░`,
  
  thinking: `
    ██░░░░░░░░░░░░░░░██
    ██░░░░▓▓░░░░░░░░░██
    ░░██░░░░░░░░░░░██░░
    ░░░░██████████████░░
    ░░░░██░░█░░░█░░██░░░
    ░░░░██░░░░░░░░██░░░░
    ░░░░░░██░░░░██░░░░░░
    ░░░░░░░░████░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░`
};

  // ============= MISSION DEFINITIONS =============
const MISSIONS = [
  {
    id: 'mission_1',
    title: 'First Contact',
    description: 'Learn to scan the network and identify active hosts',
    objectives: [
      { id: 'scan_network', text: 'Scan the network range 192.168.1.0/24', completed: false },
      { id: 'identify_hosts', text: 'Identify at least 3 active hosts', completed: false },
      { id: 'talk_to_ghost', text: 'Type "talk" to speak with GHOST', completed: false }
    ],
    ghostDialogue: [
      "well, well... another curious mind enters the void.",
      "i'm GHOST. been watching the networks for... a while now.",
      "you want to learn hacking? heh... everyone does.",
      "but here's the thing...",
      "i don't give answers. i give... opportunities.",
      "your first test: find what's hiding in the shadows.",
      "our intel states the network range is 192.168.1.0/24.",
      "use your tools, research, think.",
      "type 'hint' if you're really stuck... but that's no fun.",
    ],
    hints: [
      {
        cost: 0,
        text: "Research: What tool is used for network scanning? Try 'nmap' or search online for 'network scanning tools'."
      },
      {
        cost: 50,
        text: "The nmap command syntax is: nmap <target>. What do you think <target> should be?"
      },
      {
        cost: 100,
        text: "Try: nmap 192.168.1.0/24"
      }
    ]
  },
  {
    id: 'mission_2',
    title: 'Open Doors',
    description: 'Enumerate services and identify running software',
    objectives: [
      { id: 'service_scan', text: 'Perform service enumeration on discovered hosts', completed: false },
      { id: 'identify_versions', text: 'Identify software versions on at least 2 hosts', completed: false },
      { id: 'document_findings', text: 'Document at least 5 open ports', completed: false }
    ],
    ghostDialogue: [
      "back again? good.",
      "finding hosts is one thing...",
      "but knowing what they're running? that's where it gets interesting.",
      "every open port is a potential door.",
      "some are locked. some... not so much.",
      "your job: figure out what's behind those doors.",
      "service versions matter, REALLY matter.",
      "a version number can be the difference between getting in... and getting caught.",
      "research is your friend here. use it."
    ],
    hints: [
      {
        cost: 0,
        text: "Research: How do you scan for service versions? Look up 'nmap service detection' or check 'nmap -h' for flags."
      },
      {
        cost: 25,
        text: "The -sV flag enables version detection. What command would combine this with a target IP?"
      },
      {
        cost: 50,
        text: "Try: nmap -sV <target_ip>"
      }
    ]
  },
  {
    id: 'mission_3',
    title: 'Known Weaknesses',
    description: 'Research vulnerabilities in discovered services',
    objectives: [
      { id: 'find_cve', text: 'Find a CVE (Common Vulnerabilities and Exposures)', completed: false },
      { id: 'understand_cvss', text: 'Understand CVSS scores and severity', completed: false },
      { id: 'locate_exploit', text: 'Locate an exploit for a discovered vulnerability', completed: false }
    ],
    ghostDialogue: [
      "ah, now we're getting somewhere...",
      "you've seen what's running. nice.",
      "but here's the million-dollar question:",
      "which of these services... has a weakness?",
      "every piece of software has bugs. EVERY. SINGLE. ONE.",
      "your job? find them before someone else does.",
      "CVE databases, exploit-db, NVD...",
      "these aren't just acronyms, they're your weapons.",
      "research the services you found.",
      "find their vulnerabilities.",
      "understand the risk.",
      "then... we talk about exploitation."
    ],
    hints: [
      {
        cost: 0,
        text: "Research: What is searchsploit? Try 'searchsploit --help' or look up 'exploit database search'."
      },
      {
        cost: 25,
        text: "searchsploit searches for known exploits. Syntax: searchsploit <service_name> <version>"
      },
      {
        cost: 50,
        text: "Try: searchsploit followed by a service name and version you discovered earlier."
      }
    ]
  },
  {
    id: 'mission_4',
    title: 'Breaking In',
    description: 'Execute an exploit and gain initial access',
    objectives: [
      { id: 'select_exploit', text: 'Choose an appropriate exploit for a target', completed: false },
      { id: 'execute_exploit', text: 'Successfully execute the exploit', completed: false },
      { id: 'gain_access', text: 'Obtain shell access to a target system', completed: false }
    ],
    ghostDialogue: [
      "heh... so you've done your homework.",
      "found a vulnerability? good.",
      "now comes the fun part.",
      "exploitation isn't just running a script..",
      "it's understanding WHY it works.",
      "what's the flaw? what's being exploited?",
      "buffer overflow? sql injection? auth bypass?",
      "know your enemy. know your weapon.",
      "when you run that exploit...",
      "make it count.",
      "because in the real world, you might only get one shot."
    ],
    hints: [
      {
        cost: 0,
        text: "Research: How do exploits work? Look up the CVE you found and read about the vulnerability type."
      },
      {
        cost: 25,
        text: "The 'exploit' command needs a CVE ID and target IP. Format: exploit <CVE-ID> <target_ip>"
      },
      {
        cost: 50,
        text: "Try: exploit CVE-2024-XXXX <target_ip> (use an actual CVE you discovered)"
      }
    ]
  },
  {
    id: 'mission_5',
    title: 'Persistence',
    description: 'Maintain access and capture the flag',
    objectives: [
      { id: 'post_exploit', text: 'Perform post-exploitation reconnaissance', completed: false },
      { id: 'escalate', text: 'Understand privilege escalation concepts', completed: false },
      { id: 'capture_flag', text: 'Capture all flags from compromised systems', completed: false }
    ],
    ghostDialogue: [
      "you're in. nice work.",
      "but here's what separates script kiddies from professionals:",
      "what you do AFTER getting in.",
      "you think the job's done? heh... it's just started.",
      "escalate privileges. persist. cover tracks.",
      "find the flags. they're your proof.",
      "but more importantly... understand what you're doing.",
      "this isn't about breaking things.",
      "it's about understanding systems.",
      "understanding security.",
      "finish this. show me you've learned something."
    ],
    hints: [
      {
        cost: 0,
        text: "Research: What is post-exploitation? Look up 'privilege escalation' and 'maintaining access'."
      },
      {
        cost: 25,
        text: "After exploitation, you have access. Look for flags in the Intel panel for compromised hosts."
      },
      {
        cost: 50,
        text: "Check each exploited host's details in the Intel tab. Flags are automatically captured upon successful exploitation."
      }
    ]
  }
];

// ============= DIALOGUE COMPONENT =============
function GhostDialogue({ dialogue, onComplete, isGhostSpeaking, setIsGhostSpeaking }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [frame, setFrame] = useState('idle');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // No direct sound call here - GhostVoiceManager handles it
  }, [dialogue]);

  // Control speaking state during dialogue
  useEffect(() => {
    if (!isComplete && currentLine < dialogue.length && charIndex < dialogue[currentLine]?.length) {
      setIsGhostSpeaking(true);
    } else {
      setIsGhostSpeaking(false);
    }
  }, [currentLine, charIndex, dialogue, isComplete, setIsGhostSpeaking]);

  // Reset all state for replay
  const handleReplay = () => {
    setCurrentLine(0);
    setDisplayedText('');
    setCharIndex(0);
    setFrame('idle');
    setIsComplete(false);
  };

  useEffect(() => {
    if (isComplete) return;

    if (currentLine >= dialogue.length) {
      setIsComplete(true);
      setTimeout(onComplete, 500);
      return;
    }

    const currentText = dialogue[currentLine];
    
    if (charIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
        setFrame(charIndex % 3 === 0 ? 'speaking' : 'idle');
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setDisplayedText('');
        setCharIndex(0);
        setFrame('idle');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, charIndex, dialogue, onComplete, isComplete]);

  // Display line: clamp so it never exceeds total
  const displayLine = Math.min(currentLine + 1, dialogue.length);

  return (
    <div style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      border: '2px solid var(--accent-purple)',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      fontFamily: 'monospace'
    }}>
      <div style={{ 
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start'
      }}>
        <pre style={{ 
          color: 'var(--accent-purple)', 
          fontSize: '10px',
          lineHeight: '10px',
          margin: 0,
          flexShrink: 0
        }}>
          {GHOST_FRAMES[frame]}
        </pre>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ 
            color: 'var(--accent-purple)', 
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '14px'
          }}>
            GHOST:
          </div>
          <div style={{ 
            color: 'var(--text-primary)',
            fontSize: '13px',
            minHeight: '60px'
          }}>
            {isComplete ? (
              <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                ...transmission complete.
              </span>
            ) : (
              <>
                {displayedText}
                {charIndex < dialogue[currentLine]?.length && (
                  <span style={{ animation: 'pulse 1s infinite' }}>_</span>
                )}
              </>
            )}
          </div>
          <div style={{ 
            marginTop: '10px',
            fontSize: '11px',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span>{displayLine} / {dialogue.length}</span>
            {isComplete && (
              <button className="ghost-replay-btn" onClick={handleReplay}>
                ↺ Replay
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= TERMINAL COMPONENT =============
function Terminal({ onCommand, history, currentTarget, isGhostSpeaking, setIsGhostSpeaking }) {
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input.trim());
      setInput('');
    }
  };

  const getPrompt = () => {
    if (currentTarget) {
      return `operative@darknet:~/${currentTarget}$`;
    }
    return 'operative@darknet:~$';
  };

  return (
    <div className="terminal-pane">
      <div className="terminal-header">
        Terminal - Interactive Shell
      </div>
      <div className="terminal-content">
        {history.length === 0 && (
          <div className="terminal-line fade-in">
            <div className="terminal-output info">
              ╔═══════════════════════════════════════════════════════════╗
              ║         DARKNET OPERATIVE - TRAINING TERMINAL             ║
              ║                                                           ║
              ║  Welcome to the Vulnerability Discovery Training System  ║
              ║  Type 'help' to see available commands                   ║
              ║  Type 'talk' to speak with GHOST                          ║
              ╚═══════════════════════════════════════════════════════════╝
            </div>
          </div>
        )}

        {history.map((item, index) => (
          <div key={index} className="fade-in">
            <div className="terminal-line">
              <span className="terminal-prompt">{item.prompt}</span>
              <span className="terminal-command">{item.command}</span>
            </div>
            {item.output && (
              <div className={`terminal-output ${item.type || ''}`}>
                {item.output}
              </div>
            )}
            {item.dialogue && (
              <GhostDialogue 
                dialogue={item.dialogue} 
                onComplete={() => {}}
                isGhostSpeaking={isGhostSpeaking}
                setIsGhostSpeaking={setIsGhostSpeaking}
              />
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <div className="terminal-input-line">
            <span className="terminal-prompt">{getPrompt()}</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </form>

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}

// ============= NETWORK MAP =============
function NetworkMap({ discoveredHosts, selectedHost, onHostClick }) {
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('network-canvas') || e.target.closest('.network-canvas')) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newZoom = Math.min(Math.max(0.5, zoom + delta), 3);
    setZoom(newZoom);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const getNodePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 150;
    const centerX = 300;
    const centerY = 250;
    
    return {
      left: `${centerX + Math.cos(angle) * radius}px`,
      top: `${centerY + Math.sin(angle) * radius}px`
    };
  };

  const getNodeIcon = (host) => {
    if (host.type === 'server') return '🖥️';
    if (host.type === 'database') return '🗄️';
    if (host.type === 'router') return '🔀';
    if (host.type === 'workstation') return '💻';
    return '📡';
  };

  const getNodeClass = (host) => {
    let className = 'network-node';
    if (host.discovered) className += ' discovered';
    if (host.vulnerabilities && host.vulnerabilities.length > 0) className += ' vulnerable';
    if (host.exploited) className += ' exploited';
    return className;
  };

  return (
    <div className="network-map">
      {discoveredHosts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <div className="empty-state-text">
            No hosts discovered yet.<br />
            Type 'talk' to speak with GHOST and begin your mission.
          </div>
        </div>
      ) : (
        <>
          <div 
            className="network-canvas"
            onMouseDown={handleMouseDown}
            onWheel={handleWheel}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              fontSize: '11px',
              color: 'var(--text-muted)',
              opacity: 0.7,
              zIndex: 10,
              pointerEvents: 'none',
              userSelect: 'none'
            }}>
              Zoom: {Math.round(zoom * 100)}%
            </div>
            
            <div style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              width: '600px',
              height: '500px',
              position: 'relative'
            }}>
              <div
                className="network-node"
                style={{
                  left: '300px',
                  top: '250px',
                  transform: 'translate(-50%, -50%)',
                  borderColor: 'var(--accent-blue)',
                  pointerEvents: 'none'
                }}
              >
                <div className="node-icon">👤</div>
                <div className="node-label">YOU</div>
              </div>

              {discoveredHosts.map((host, index) => {
                const position = getNodePosition(index, discoveredHosts.length);
                return (
                  <div
                    key={host.ip}
                    className={getNodeClass(host)}
                    style={{
                      ...position,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onHostClick(host);
                    }}
                    title={`${host.ip} - ${host.hostname || 'Unknown'}`}
                  >
                    <div className="node-icon">{getNodeIcon(host)}</div>
                    <div className="node-label">{host.ip}</div>
                    {host.vulnerabilities && host.vulnerabilities.length > 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        background: 'var(--accent-red)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}>
                        {host.vulnerabilities.length}
                      </div>
                    )}
                  </div>
                );
              })}

              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none'
                }}
              >
                {discoveredHosts.map((host, index) => {
                  const pos = getNodePosition(index, discoveredHosts.length);
                  return (
                    <line
                      key={`line-${host.ip}`}
                      x1="300"
                      y1="250"
                      x2={parseInt(pos.left)}
                      y2={parseInt(pos.top)}
                      stroke={host.exploited ? 'var(--accent-red)' : 'var(--border-primary)'}
                      strokeWidth="2"
                      strokeDasharray={host.discovered ? '0' : '5,5'}
                      opacity="0.5"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ============= INTEL PANEL =============
function IntelPanel({ selectedHost }) {
  const getSeverityBadge = (severity) => {
    return <span className={`intel-badge ${severity.toLowerCase()}`}>{severity}</span>;
  };

  const getCVSSColor = (score) => {
    if (score >= 9.0) return 'var(--accent-red)';
    if (score >= 7.0) return 'var(--accent-orange)';
    if (score >= 4.0) return 'var(--accent-yellow)';
    return 'var(--accent-green)';
  };

  if (!selectedHost) {
    return (
      <div className="intel-panel">
        <div className="empty-state">
          <div className="empty-state-icon">🎯</div>
          <div className="empty-state-text">
            Select a host from the Network Map to view intelligence data.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="intel-panel">
      <div className="intel-card fade-in">
        <div className="intel-card-header">
          <div className="intel-card-title">Host Information</div>
          {selectedHost.exploited && (
            <span className="intel-badge critical">EXPLOITED</span>
          )}
        </div>
        <div className="intel-detail">
          <span className="intel-label">IP Address:</span>
          <span className="intel-value">{selectedHost.ip}</span>
        </div>
        <div className="intel-detail">
          <span className="intel-label">Hostname:</span>
          <span className="intel-value">{selectedHost.hostname || 'Unknown'}</span>
        </div>
        <div className="intel-detail">
          <span className="intel-label">OS:</span>
          <span className="intel-value">{selectedHost.os || 'Unknown'}</span>
        </div>
        <div className="intel-detail">
          <span className="intel-label">Status:</span>
          <span className="intel-value" style={{ color: 'var(--accent-green)' }}>
            {selectedHost.discovered ? 'ONLINE' : 'OFFLINE'}
          </span>
        </div>
      </div>

      {selectedHost.ports && selectedHost.ports.length > 0 && (
        <div className="intel-card fade-in">
          <div className="intel-card-header">
            <div className="intel-card-title">Open Ports & Services</div>
          </div>
          {selectedHost.ports.map((port, index) => (
            <div key={index} className="intel-detail">
              <span className="intel-label">{port.port}/{port.protocol}</span>
              <span className="intel-value">
                {port.service} {port.version && `(${port.version})`}
              </span>
            </div>
          ))}
        </div>
      )}

      {selectedHost.vulnerabilities && selectedHost.vulnerabilities.length > 0 ? (
        <div className="intel-card fade-in">
          <div className="intel-card-header">
            <div className="intel-card-title">Discovered Vulnerabilities</div>
            <span className="intel-badge high">{selectedHost.vulnerabilities.length} Found</span>
          </div>
          {selectedHost.vulnerabilities.map((vuln, index) => (
            <div key={index} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: index < selectedHost.vulnerabilities.length - 1 ? '1px solid var(--border-secondary)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{vuln.cve}</span>
                {getSeverityBadge(vuln.severity)}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                {vuln.description}
              </div>
              <div className="intel-detail" style={{ border: 'none', padding: '4px 0' }}>
                <span className="intel-label">CVSS Score:</span>
                <span className="intel-value" style={{ color: getCVSSColor(vuln.cvss) }}>
                  {vuln.cvss} / 10.0
                </span>
              </div>
              <div className="intel-detail" style={{ border: 'none', padding: '4px 0' }}>
                <span className="intel-label">Affected Service:</span>
                <span className="intel-value">{vuln.service}</span>
              </div>
              {vuln.exploit && (
                <div style={{ marginTop: '8px', padding: '8px', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', borderLeft: '3px solid var(--accent-orange)' }}>
                  <div style={{ fontSize: '12px', color: 'var(--accent-orange)', fontWeight: 600, marginBottom: '4px' }}>
                    🎯 EXPLOIT AVAILABLE
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {vuln.exploit}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="intel-card fade-in">
          <div className="intel-card-header">
            <div className="intel-card-title">Vulnerabilities</div>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
            No vulnerabilities discovered yet.<br />
            Use vulnerability scanning tools to analyze this host.
          </div>
        </div>
      )}

      {selectedHost.exploited && (
        <div className="intel-card fade-in" style={{ borderLeft: '4px solid var(--accent-red)' }}>
          <div className="intel-card-header">
            <div className="intel-card-title">Exploitation Status</div>
            <span className="intel-badge critical">COMPROMISED</span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            This host has been successfully exploited. You have gained {selectedHost.accessLevel || 'user'}-level access.
          </div>
          {selectedHost.flags && selectedHost.flags.length > 0 && (
            <div>
              <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>
                Captured Flags:
              </div>
              {selectedHost.flags.map((flag, index) => (
                <div key={index} className="intel-value" style={{ 
                  padding: '8px', 
                  backgroundColor: 'var(--bg-primary)', 
                  borderRadius: '4px',
                  marginBottom: '4px',
                  color: 'var(--accent-green)'
                }}>
                  🚩 {flag}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============= TOOLS PANEL =============
function ToolsPanel({ onToolClick }) {
  const tools = [
    {
      name: 'nmap',
      description: 'Network Mapper - Discover hosts and scan for open ports on the network.',
      usage: 'nmap <target>',
      category: 'reconnaissance'
    },
    {
      name: 'nmap -sV',
      description: 'Service Version Detection - Identifies the versions of services running on open ports.',
      usage: 'nmap -sV <target>',
      category: 'reconnaissance'
    },
    {
      name: 'searchsploit',
      description: 'Exploit Database Search - Search for known exploits based on software versions.',
      usage: 'searchsploit <service> <version>',
      category: 'exploitation'
    },
    {
      name: 'exploit',
      description: 'Execute Exploit - Run a specific exploit against a target system.',
      usage: 'exploit <CVE-ID> <target>',
      category: 'exploitation'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'reconnaissance': return 'var(--accent-blue)';
      case 'vulnerability': return 'var(--accent-yellow)';
      case 'exploitation': return 'var(--accent-red)';
      case 'post-exploitation': return 'var(--accent-purple)';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <div className="tools-panel">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="tool-card fade-in"
          onClick={() => onToolClick(tool)}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div className="tool-name">{tool.name}</div>
            <span
              style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: `${getCategoryColor(tool.category)}20`,
                color: getCategoryColor(tool.category),
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              {tool.category}
            </span>
          </div>
          <div className="tool-description">{tool.description}</div>
          <div className="tool-usage">{tool.usage}</div>
        </div>
      ))}
    </div>
  );
}

const MUSIC_SEQUENCE = [
  { notes: ['g3'], duration: 0.5 },
  { notes: ['bb3', 'c4'], duration: 0.5 },
  { notes: ['g4', 'f4', 'eb4', 'f3'], duration: 0.5 },
  { notes: ['a2'], duration: 1.0 }
];

function noteToFrequency(note) {
  const semitoneMap = { c: 0, 'c#': 1, db: 1, d: 2, 'd#': 3, eb: 3, e: 4, f: 5, 'f#': 6, gb: 6, g: 7, 'g#': 8, ab: 8, a: 9, 'a#': 10, bb: 10, b: 11 };
  const match = note.match(/^([a-g][b#]?)(\d+)$/i);
  if (!match) return 440;
  const pitch = match[1].toLowerCase();
  const octave = parseInt(match[2], 10);
  const semitone = semitoneMap[pitch];
  const midi = 12 + octave * 12 + semitone;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function MusicManager({ isPlaying }) {
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);

  const stop = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const playSequence = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = audioContextRef.current || new AudioContext();
    audioContextRef.current = ctx;

    const baseTime = ctx.currentTime + 0.1;
    let cursor = baseTime;

    MUSIC_SEQUENCE.forEach((step) => {
      step.notes.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(noteToFrequency(n), cursor);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.0001, cursor);
        gain.gain.exponentialRampToValueAtTime(0.15, cursor + 0.02);
        gain.gain.setValueAtTime(0.15, cursor + step.duration - 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, cursor + step.duration);
        osc.connect(gain).connect(ctx.destination);
        osc.start(cursor);
        osc.stop(cursor + step.duration);
      });
      cursor += step.duration;
    });
  };

  useEffect(() => {
    const loopDuration = MUSIC_SEQUENCE.reduce((sum, item) => sum + item.duration, 0) * 1000;

    if (isPlaying) {
      playSequence();
      intervalRef.current = window.setInterval(playSequence, loopDuration);
    } else {
      stop();
    }

    return () => {
      stop();
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [isPlaying]);

  return null;
}

// ============= GHOST VOICE MANAGER =============
function GhostVoiceManager({ isSpeaking, isMuted }) {
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);

  const stop = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    try {
      const { stop } = window.Strudel;
      if (stop) {
        stop();
      }
    } catch (e) {
      // Strudel not ready
    }
  };

  const playVoice = () => {
    console.log('playVoice called - isMuted:', isMuted);
    
    if (isMuted) {
      console.log('Audio is muted, not playing');
      return;
    }

    try {
      const { start, note, irand } = window.Strudel;
      console.log('Strudel available:', { start: !!start, note: !!note, irand: !!irand });
      
      if (!start || !note) {
        console.log('Strudel start or note not available');
        return;
      }

      console.log('Starting Strudel pattern...');
      start(
        note("<c2*6 ~ c3*10 ~ c2*4>")
          .sometimes(x => x.fast(2))
          .sound("square")
          .n(irand ? irand(2) : Math.floor(Math.random() * 2))
          .lpf(900)
          .vowel("<e o>")
          .attack(0.001)
          .decay(0.06)
          .sustain(0.05)
          .gain(0.25)
          .speed("<1 0.95 1.05 1>")
          ._scope()
      );
      console.log('Strudel pattern started');
    } catch (e) {
      console.log('Strudel error:', e);
    }
  };

  useEffect(() => {
    console.log('GhostVoiceManager - isSpeaking:', isSpeaking, 'isMuted:', isMuted);
    
    if (isSpeaking && !isMuted) {
      console.log('Starting voice playback...');
      // Play sound immediately
      playVoice();
      // Keep playing while speaking
      intervalRef.current = window.setInterval(() => {
        console.log('Playing voice on interval');
        playVoice();
      }, 1000);
    } else {
      console.log('Stopping voice playback');
      stop();
    }

    return () => {
      stop();
    };
  }, [isSpeaking, isMuted]);

  return null;
}

// ============= MISSION OBJECTIVES =============
function MissionObjectives({ currentMission, objectives }) {
  return (
    <div className="mission-objectives">
      <div className="mission-title">
        🎯 Mission: {currentMission}
      </div>
      <div className="objectives-list">
        {objectives.map((objective, index) => (
          <div key={index} className="objective-item">
            <div className={`objective-checkbox ${objective.completed ? 'completed' : ''}`}>
              {objective.completed && '✓'}
            </div>
            <span className={`objective-text ${objective.completed ? 'completed' : ''}`}>
              {objective.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= HINTS PANEL =============
function HintsPanel({ currentMission, playerXP, onUnlockHint }) {
  const mission = MISSIONS.find(m => m.id === currentMission);
  const [unlockedHints, setUnlockedHints] = useState([0]);

  if (!mission) {
    return (
      <div className="hints-panel">
        <div className="empty-state">
          <div className="empty-state-icon">💡</div>
          <div className="empty-state-text">
            Complete objectives to unlock hints and guidance.
          </div>
        </div>
      </div>
    );
  }

  const handleUnlock = (index, cost) => {
    if (playerXP >= cost && !unlockedHints.includes(index)) {
      setUnlockedHints([...unlockedHints, index]);
      onUnlockHint(cost);
    }
  };

  return (
    <div className="hints-panel">
      <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent-purple)' }}>
        <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--accent-purple)' }}>
          💭 GHOST's Wisdom
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          "hints are for those who seek... but remember, the best lessons come from figuring it out yourself."
        </div>
      </div>

      {mission.hints.map((hint, index) => {
        const isUnlocked = unlockedHints.includes(index);
        const canAfford = playerXP >= hint.cost;

        return (
          <div key={index} className={`hint-box ${!isUnlocked ? 'locked' : ''}`}>
            <div className="hint-header">
              <div className="hint-title">
                {isUnlocked ? '💡' : '🔒'} Hint {index + 1}
                {hint.cost > 0 && !isUnlocked && ` (${hint.cost} XP)`}
                {hint.cost === 0 && ' (Free)'}
              </div>
              {!isUnlocked && hint.cost > 0 && (
                <button
                  className="hint-unlock-btn"
                  onClick={() => handleUnlock(index, hint.cost)}
                  disabled={!canAfford}
                  style={{ opacity: canAfford ? 1 : 0.5, cursor: canAfford ? 'pointer' : 'not-allowed' }}
                >
                  Unlock
                </button>
              )}
            </div>
            {isUnlocked && (
              <div className="hint-content">
                {hint.text}
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(88, 166, 255, 0.1)', borderRadius: '6px', fontSize: '12px', color: 'var(--accent-blue)' }}>
        <strong>Remember:</strong> Research is key! Use search engines, read documentation (man pages), and explore resources like CVE databases and Exploit-DB.
      </div>
    </div>
  );
}

const playGhostSound = () => {
  try {
    const { start, note, irand } = window.Strudel;
    if (!start) return; // Safety check

    // Perfect GHOST voice loop - continuous while speaking
    start(
      note("<c2*6 ~ c3*10 ~ c2*4>")
        .sometimes(x => x.fast(2))
        .sound("square")
        .n(irand ? irand(2) : Math.floor(Math.random() * 2))
        .lpf(900)
        .vowel("<e o>")
        .attack(0.001)
        .decay(0.06)
        .sustain(0.05)
        .gain(0.25)
        .speed("<1 0.95 1.05 1>")
        ._scope()
    );
  } catch (e) {
    console.log('Strudel not ready yet');
  }
};

const stopGhostSound = () => {
  try {
    const { stop } = window.Strudel;
    if (stop) {
      stop();
    }
  } catch (e) {
    console.log('Strudel not ready yet');
  }
};

// ============= MAIN APP =============
function App() {
  const [activeTab, setActiveTab] = useState('network');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [currentTarget, setCurrentTarget] = useState(null);
  const [playerXP, setPlayerXP] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [isGhostSpeaking, setIsGhostSpeaking] = useState(false);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [discoveredHosts, setDiscoveredHosts] = useState([
    {
      ip: '192.168.1.10',
      hostname: 'web-server-01',
      os: 'Ubuntu 20.04 LTS',
      type: 'server',
      discovered: false,
      ports: [
        { port: 22, protocol: 'tcp', service: 'SSH', version: 'OpenSSH 8.2p1' },
        { port: 80, protocol: 'tcp', service: 'HTTP', version: 'Apache 2.4.41' },
        { port: 443, protocol: 'tcp', service: 'HTTPS', version: 'Apache 2.4.41' }
      ],
      vulnerabilities: [
        {
          cve: 'CVE-2024-1234',
          severity: 'High',
          cvss: 7.5,
          description: 'Apache HTTP Server directory traversal vulnerability allows unauthorized file access',
          service: 'Apache 2.4.41',
          exploit: 'Metasploit: exploit/multi/http/apache_normalize_path'
        }
      ],
      exploited: false,
      accessLevel: null,
      flags: []
    },
    {
      ip: '192.168.1.15',
      hostname: 'db-server-01',
      os: 'CentOS 8',
      type: 'database',
      discovered: false,
      ports: [
        { port: 22, protocol: 'tcp', service: 'SSH', version: 'OpenSSH 7.4' },
        { port: 3306, protocol: 'tcp', service: 'MySQL', version: 'MySQL 5.7.30' },
        { port: 8080, protocol: 'tcp', service: 'HTTP', version: 'Tomcat 9.0' }
      ],
      vulnerabilities: [
        {
          cve: 'CVE-2024-5678',
          severity: 'Critical',
          cvss: 9.8,
          description: 'MySQL unauthenticated remote code execution via malformed packet',
          service: 'MySQL 5.7.30',
          exploit: 'Metasploit: exploit/linux/mysql/mysql_yassl_hello'
        }
      ],
      exploited: false,
      accessLevel: null,
      flags: []
    },
    {
      ip: '192.168.1.20',
      hostname: 'file-server-01',
      os: 'Windows Server 2019',
      type: 'server',
      discovered: false,
      ports: [
        { port: 135, protocol: 'tcp', service: 'RPC', version: 'Microsoft Windows RPC' },
        { port: 139, protocol: 'tcp', service: 'NetBIOS', version: 'Microsoft Windows netbios-ssn' },
        { port: 445, protocol: 'tcp', service: 'SMB', version: 'Microsoft-DS' }
      ],
      vulnerabilities: [
        {
          cve: 'CVE-2024-9012',
          severity: 'Critical',
          cvss: 9.0,
          description: 'EternalBlue SMBv1 remote code execution vulnerability',
          service: 'Microsoft-DS',
          exploit: 'Metasploit: exploit/windows/smb/ms17_010_eternalblue'
        }
      ],
      exploited: false,
      accessLevel: null,
      flags: []
    }
  ]);
  const [selectedHost, setSelectedHost] = useState(null);
  const [objectives, setObjectives] = useState(MISSIONS[0].objectives);
  const [hasMetGhost, setHasMetGhost] = useState(false);

  const currentMission = MISSIONS[currentMissionIndex];

  const handleCommand = (command) => {
    const historyItem = {
      prompt: currentTarget ? `operative@darknet:~/${currentTarget}$` : 'operative@darknet:~$',
      command: command,
      output: null,
      type: null,
      dialogue: null
    };

    const parts = command.toLowerCase().split(' ');
    const cmd = parts[0];

    // Award 25 XP for each command attempt
    awardXP(5);

    if (cmd === 'talk' || cmd === 'ghost') {
      if (!hasMetGhost) {
        setHasMetGhost(true);
        updateObjective('talk_to_ghost', true);
        awardXP(10);
      }
      historyItem.dialogue = currentMission.ghostDialogue;
      setTerminalHistory(prev => [...prev, historyItem]);
      return;
    }

    if (cmd === 'help') {
      historyItem.output = `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMUNICATION:
  talk, ghost          - Speak with GHOST for mission guidance
  hint                 - View available hints (costs XP)
  mission              - View current mission objectives

RECONNAISSANCE:
  nmap <target>        - Scan network for active hosts
  nmap -sV <target>    - Scan host and enumerate services

EXPLOITATION:
  searchsploit <query> - Search for exploits in database
  exploit <CVE> <IP>   - Execute exploit against target

NAVIGATION:
  clear                - Clear terminal screen
  help                 - Show this help message

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TIP: Research is your best friend. Use man pages,
ai, and search engines to learn about the tools and techniques.`;
      historyItem.type = 'info';
      setTerminalHistory(prev => [...prev, historyItem]);
      return;
    }

    if (cmd === 'mission') {
      historyItem.output = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 CURRENT MISSION: ${currentMission.title}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${currentMission.description}

OBJECTIVES:
${objectives.map((obj) => `  ${obj.completed ? '✓' : '○'} ${obj.text}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Progress: ${objectives.filter(o => o.completed).length} / ${objectives.length} complete
Type 'talk' to speak with GHOST for guidance.`;
      historyItem.type = 'info';
      setTerminalHistory(prev => [...prev, historyItem]);
      return;
    }

    if (cmd === 'hint') {
      historyItem.output = 'Hints are available in the Hints tab. Switch tabs to view available guidance.';
      historyItem.type = 'info';
      setTerminalHistory(prev => [...prev, historyItem]);
      setActiveTab('hints');
      return;
    }

    if (cmd === 'clear') {
      setTerminalHistory([]);
      return;
    }

    if (cmd === 'nmap') {
      if (parts.length < 2) {
        historyItem.output = 'Usage: nmap <target>\nExample: nmap 192.168.1.0/24';
        historyItem.type = 'error';
        setTerminalHistory(prev => [...prev, historyItem]);
        return;
      }

      const target = parts[parts.length - 1];
      const isServiceScan = parts.includes('-sv');

      if (target === '192.168.1.0/24' || target.startsWith('192.168.1.')) {
        if (isServiceScan) {
          const targetIp = target.replace('/24', '');
          const host = discoveredHosts.find(h => target === '192.168.1.0/24' || h.ip === targetIp);
          
          if (host) {
            handleServiceEnumeration(host.ip, historyItem);
            updateObjective('service_scan', true);
            updateObjective('identify_versions', true);
            
            const totalPorts = discoveredHosts.reduce((sum, h) => sum + (h.ports?.length || 0), 0);
            if (totalPorts >= 5) {
              updateObjective('document_findings', true);
            }
          } else {
            historyItem.output = `Host ${targetIp} not found. Scan the network first.`;
            historyItem.type = 'error';
            setTerminalHistory(prev => [...prev, historyItem]);
          }
        } else {
          handleNetworkScan(historyItem);
          updateObjective('scan_network', true);
          
          const discoveredCount = discoveredHosts.filter(h => h.discovered).length + discoveredHosts.length;
          if (discoveredCount >= 3) {
            updateObjective('identify_hosts', true);
          }
        }
      } else {
        historyItem.output = `Invalid target. Try scanning the network range: 192.168.1.0/24`;
        historyItem.type = 'error';
        setTerminalHistory(prev => [...prev, historyItem]);
      }
      return;
    }

    if (cmd === 'searchsploit') {
      if (parts.length < 2) {
        historyItem.output = 'Usage: searchsploit <service> <version>\nExample: searchsploit apache 2.4.41';
        historyItem.type = 'error';
        setTerminalHistory(prev => [...prev, historyItem]);
        return;
      }

      const query = parts.slice(1).join(' ');
      handleSearchSploit(query, historyItem);
      updateObjective('find_cve', true);
      updateObjective('understand_cvss', true);
      updateObjective('locate_exploit', true);
      return;
    }

    if (cmd === 'exploit') {
      if (parts.length < 3) {
        historyItem.output = 'Usage: exploit <CVE-ID> <target-ip>\nExample: exploit CVE-2024-1234 192.168.1.10';
        historyItem.type = 'error';
        setTerminalHistory(prev => [...prev, historyItem]);
        return;
      }

      const cve = parts[1];
      const targetIp = parts[2];
      handleExploit(cve, targetIp, historyItem);
      updateObjective('select_exploit', true);
      updateObjective('execute_exploit', true);
      updateObjective('gain_access', true);
      updateObjective('post_exploit', true);
      updateObjective('escalate', true);
      updateObjective('capture_flag', true);
      return;
    }

    historyItem.output = `Command not found: ${command}\nType 'help' for available commands.`;
    historyItem.type = 'error';
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  const handleNetworkScan = (historyItem) => {
    const updatedHosts = discoveredHosts.map(host => ({ ...host, discovered: true }));
    setDiscoveredHosts(updatedHosts);

    historyItem.output = `Starting Nmap scan on 192.168.1.0/24...

Nmap scan report for 192.168.1.0/24
Host discovery completed. ${updatedHosts.length} hosts found.

${updatedHosts.map(host => 
  `  ${host.ip}\t${host.hostname}\t[${host.type}]`
).join('\n')}

Scan complete. Use 'nmap -sV <target>' for service enumeration.`;
    historyItem.type = 'success';
    awardXP(100);
    setActiveTab('network');
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  const handleServiceEnumeration = (ip, historyItem) => {
    const host = discoveredHosts.find(h => h.ip === ip);
    
    if (!host) {
      historyItem.output = `Host ${ip} not found. Scan the network first using: nmap 192.168.1.0/24`;
      historyItem.type = 'error';
      setTerminalHistory(prev => [...prev, historyItem]);
      return;
    }

    historyItem.output = `Starting service enumeration on ${ip}...

PORT     STATE SERVICE       VERSION
${host.ports.map(port => 
  `${port.port}/${port.protocol}   open  ${port.service.padEnd(12)} ${port.version || 'version detection failed'}`
).join('\n')}

Service enumeration complete. Use 'searchsploit' to find exploits for these services.`;
    historyItem.type = 'success';
    awardXP(75);
    setSelectedHost(host);
    setActiveTab('intel');
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  const handleSearchSploit = (query, historyItem) => {
    let foundVulns = [];

    discoveredHosts.forEach(host => {
      host.vulnerabilities?.forEach(vuln => {
        const searchTerms = query.toLowerCase().split(' ');
        const vulnText = `${vuln.service} ${vuln.cve} ${vuln.description}`.toLowerCase();
        
        if (searchTerms.some(term => vulnText.includes(term))) {
          foundVulns.push({ ...vuln, hostIp: host.ip });
        }
      });
    });

    if (foundVulns.length > 0) {
      historyItem.output = `Searching exploit database for: ${query}

Found ${foundVulns.length} exploit(s):

${foundVulns.map((vuln, i) => 
  `[${i + 1}] ${vuln.cve} - ${vuln.description}
    Target: ${vuln.hostIp}
    Severity: ${vuln.severity} (CVSS: ${vuln.cvss})
    ${vuln.exploit}`
).join('\n\n')}

Use 'exploit <CVE-ID> <target-ip>' to execute an exploit.`;
      historyItem.type = 'success';
      awardXP(150);
    } else {
      historyItem.output = `No exploits found for "${query}"\n\nTip: Make sure you've enumerated services first with 'nmap -sV <target>'`;
      historyItem.type = 'warning';
    }
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  const handleExploit = (cve, targetIp, historyItem) => {
    const host = discoveredHosts.find(h => h.ip === targetIp);
    
    if (!host) {
      historyItem.output = `Target ${targetIp} not found.`;
      historyItem.type = 'error';
      setTerminalHistory(prev => [...prev, historyItem]);
      return;
    }

    const vuln = host.vulnerabilities?.find(v => v.cve.toLowerCase() === cve.toLowerCase());
    
    if (!vuln) {
      historyItem.output = `Vulnerability ${cve} not found on target ${targetIp}.\nUse 'searchsploit' to find available exploits.`;
      historyItem.type = 'error';
      setTerminalHistory(prev => [...prev, historyItem]);
      return;
    }

    const updatedHosts = discoveredHosts.map(h => {
      if (h.ip === targetIp) {
        return {
          ...h,
          exploited: true,
          accessLevel: 'root',
          flags: [`FLAG{${cve}_EXPLOITED_SUCCESSFULLY}`]
        };
      }
      return h;
    });
    
    setDiscoveredHosts(updatedHosts);
    setSelectedHost(updatedHosts.find(h => h.ip === targetIp));

    const exploitedCount = updatedHosts.filter(h => h.exploited).length;
    const remainingHosts = updatedHosts.filter(h => !h.exploited && h.discovered);
    
    let nextTargetMessage = '';
    if (remainingHosts.length > 0) {
      const nextHost = remainingHosts[0];
      nextTargetMessage = `

[!] NEXT TARGET IDENTIFIED:
    Try exploiting ${nextHost.ip} (${nextHost.hostname})
    Use 'nmap -sV ${nextHost.ip}' to enumerate services
    Then use 'searchsploit' to find vulnerabilities`;
    } else if (exploitedCount === updatedHosts.length) {
      nextTargetMessage = `

[+] MISSION COMPLETE!
    All targets have been compromised!
    Type 'talk' to speak with GHOST about your next mission.`;
      
      if (currentMissionIndex < MISSIONS.length - 1) {
        setTimeout(() => {
          setCurrentMissionIndex(prev => prev + 1);
          setObjectives(MISSIONS[currentMissionIndex + 1].objectives);
        }, 3000);
      }
    }

    historyItem.output = `[*] Initializing exploit ${cve}...
[*] Sending payload to ${targetIp}...
[+] Exploit successful!
[+] Shell obtained on ${targetIp}
[+] Access level: ROOT
[+] Flag captured: FLAG{${cve}_EXPLOITED_SUCCESSFULLY}

You now have full control of ${host.hostname}!${nextTargetMessage}`;
    historyItem.type = 'success';
    awardXP(300);
    setActiveTab('intel');
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  const updateObjective = (id, completed) => {
    setObjectives(prev => prev.map(obj => 
      obj.id === id ? { ...obj, completed } : obj
    ));
  };

  const awardXP = (amount) => {
    setPlayerXP(prev => {
      const newXP = prev + amount;
      const newLevel = Math.floor(newXP / 500) + 1;
      if (newLevel > playerLevel) {
        setPlayerLevel(newLevel);
        const levelUpNotification = {
          prompt: 'SYSTEM',
          command: '',
          output: `🎉 LEVEL UP! You are now Level ${newLevel}!`,
          type: 'success'
        };
        setTerminalHistory(h => [...h, levelUpNotification]);
      }
      return newXP;
    });
  };

  const handleUnlockHint = (cost) => {
    setPlayerXP(prev => prev - cost);
  };

  const handleHostClick = (host) => {
    setSelectedHost(host);
    setActiveTab('intel');
  };

  const handleToolClick = (tool) => {
    console.log('Tool clicked:', tool.name);
  };

  return (
    <div className="app-container">
      <MusicManager isPlaying={isMusicPlaying} />
      <GhostVoiceManager isSpeaking={isGhostSpeaking} isMuted={!isMusicPlaying} />
      <div className="title-bar">
        <div className="title-bar-left">
          <div className="stat-item">
            <span>Level:</span>
            <span className="stat-value">{playerLevel}</span>
          </div>
          <div className="stat-item">
            <span>XP:</span>
            <span className="stat-value">{playerXP}</span>
          </div>
        </div>

        <div className="title-bar-center">
          <ASCIIText
            text="darknet_"
            enableWaves={false}
            asciiFontSize={10}
          />
        </div>

        <div className="player-stats">
          <button
            className="sound-toggle"
            onClick={() => setIsMusicPlaying(prev => !prev)}
            title={isMusicPlaying ? 'Mute all audio' : 'Unmute all audio'}
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>
          <div className="stat-item">
            <span>Mission:</span>
            <span className="stat-value">{currentMissionIndex + 1}/{MISSIONS.length}</span>
          </div>
          <div className="stat-item">
            <span>Hosts:</span>
            <span className="stat-value">{discoveredHosts.filter(h => h.discovered).length}</span>
          </div>
        </div>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab ${activeTab === 'network' ? 'active' : ''}`}
          onClick={() => setActiveTab('network')}
        >
          Network Map
        </button>
        <button 
          className={`tab ${activeTab === 'intel' ? 'active' : ''}`}
          onClick={() => setActiveTab('intel')}
        >
          Intel
        </button>
        <button 
          className={`tab ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
        <button 
          className={`tab ${activeTab === 'hints' ? 'active' : ''}`}
          onClick={() => setActiveTab('hints')}
        >
          Hints
        </button>
      </div>

      {/* ── KEY FIX: content-row wraps terminal + panel side-by-side ── */}
      <div className="main-content">
        <div className="content-row">
          <Terminal 
            onCommand={handleCommand}
            history={terminalHistory}
            currentTarget={currentTarget}
            isGhostSpeaking={isGhostSpeaking}
            setIsGhostSpeaking={setIsGhostSpeaking}
          />
          
          <div className="visual-pane">
            <div className="panel-content">
              {activeTab === 'network' && (
                <NetworkMap 
                  discoveredHosts={discoveredHosts.filter(h => h.discovered)}
                  selectedHost={selectedHost}
                  onHostClick={handleHostClick}
                />
              )}
              {activeTab === 'intel' && (
                <IntelPanel selectedHost={selectedHost} />
              )}
              {activeTab === 'tools' && (
                <ToolsPanel onToolClick={handleToolClick} />
              )}
              {activeTab === 'hints' && (
                <HintsPanel 
                  currentMission={currentMission.id}
                  playerXP={playerXP}
                  onUnlockHint={handleUnlockHint}
                />
              )}
            </div>
          </div>
        </div>

        <MissionObjectives 
          currentMission={currentMission.title}
          objectives={objectives}
        />
      </div>
    </div>
  );
}

export default App;
