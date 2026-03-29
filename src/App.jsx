<<<<<<< Updated upstream
const { useState, useEffect, useRef } = React;
=======
import React, { useState, useEffect, useRef } from 'react';
import ASCIIText from './ASCIIText';
>>>>>>> Stashed changes

// ============= MISSION DATA =============
const MISSIONS = {
  mission1: {
    id: 'mission1',
    title: 'Operation: First Contact',
    difficulty: 'Beginner',
    unlocked: true,
    completed: false,
    objectives: [
      { id: 'scan-network', text: 'Scan the network for active hosts', completed: false },
      { id: 'enumerate-services', text: 'Enumerate services on discovered hosts', completed: false },
      { id: 'find-vulnerabilities', text: 'Identify vulnerabilities', completed: false },
      { id: 'exploit-target', text: 'Successfully exploit a vulnerability', completed: false },
      { id: 'capture-flags', text: 'Capture all flags (0/2)', completed: false, count: 0, total: 2 }
    ],
    network: [
      {
        ip: '192.168.1.100',
        hostname: 'web-server-01',
        type: 'server',
        os: 'Linux Ubuntu 20.04',
        discovered: false,
        exploited: false,
        ports: [
          { port: 80, protocol: 'tcp', service: 'Apache httpd', version: '2.4.49' },
          { port: 443, protocol: 'tcp', service: 'Apache httpd', version: '2.4.49' },
          { port: 22, protocol: 'tcp', service: 'OpenSSH', version: '8.2p1' }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2021-41773',
            severity: 'Critical',
            cvss: 9.8,
            service: 'Apache httpd 2.4.49',
            description: 'Path traversal and remote code execution vulnerability in Apache HTTP Server 2.4.49',
            exploit: 'Use: exploit CVE-2021-41773 192.168.1.100'
          }
        ],
        flags: []
      },
      {
        ip: '192.168.1.101',
        hostname: 'db-server-01',
        type: 'database',
        os: 'Windows Server 2019',
        discovered: false,
        exploited: false,
        ports: [
          { port: 3306, protocol: 'tcp', service: 'MySQL', version: '5.7.32' },
          { port: 445, protocol: 'tcp', service: 'SMB', version: null }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2020-1472',
            severity: 'Critical',
            cvss: 10.0,
            service: 'SMB (Zerologon)',
            description: 'Elevation of privilege vulnerability in Netlogon Remote Protocol',
            exploit: 'Use: exploit CVE-2020-1472 192.168.1.101'
          }
        ],
        flags: []
      }
    ]
  },
  
  mission2: {
    id: 'mission2',
    title: 'Operation: Shadow Trail',
    difficulty: 'Intermediate',
    unlocked: false,
    completed: false,
    objectives: [
      { id: 'scan-network', text: 'Scan the network for active hosts', completed: false },
      { id: 'enumerate-services', text: 'Enumerate services on discovered hosts', completed: false },
      { id: 'find-vulnerabilities', text: 'Identify vulnerabilities', completed: false },
      { id: 'exploit-target', text: 'Successfully exploit a vulnerability', completed: false },
      { id: 'capture-flags', text: 'Capture all flags (0/3)', completed: false, count: 0, total: 3 }
    ],
    network: [
      {
        ip: '192.168.2.50',
        hostname: 'web-portal',
        type: 'server',
        os: 'Linux Ubuntu 22.04',
        discovered: false,
        exploited: false,
        ports: [
          { port: 8080, protocol: 'tcp', service: 'Apache Tomcat', version: '9.0.50' },
          { port: 22, protocol: 'tcp', service: 'OpenSSH', version: '8.9p1' }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2021-41773',
            severity: 'High',
            cvss: 8.5,
            service: 'Apache Tomcat',
            description: 'Remote code execution in Apache Tomcat',
            exploit: 'Use: exploit CVE-2021-41773 192.168.2.50'
          }
        ],
        flags: []
      },
      {
        ip: '192.168.2.51',
        hostname: 'db-finance',
        type: 'database',
        os: 'Windows Server 2022',
        discovered: false,
        exploited: false,
        ports: [
          { port: 1433, protocol: 'tcp', service: 'Microsoft SQL Server', version: '2019' },
          { port: 3389, protocol: 'tcp', service: 'RDP', version: null }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2021-31166',
            severity: 'Critical',
            cvss: 9.8,
            service: 'HTTP.sys',
            description: 'Remote code execution vulnerability in HTTP Protocol Stack',
            exploit: 'Use: exploit CVE-2021-31166 192.168.2.51'
          }
        ],
        flags: []
      },
      {
        ip: '192.168.2.52',
        hostname: 'file-server',
        type: 'server',
        os: 'Linux CentOS 8',
        discovered: false,
        exploited: false,
        ports: [
          { port: 445, protocol: 'tcp', service: 'Samba', version: '4.10.16' },
          { port: 22, protocol: 'tcp', service: 'OpenSSH', version: '8.0p1' }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2020-1472',
            severity: 'Critical',
            cvss: 10.0,
            service: 'Samba/SMB',
            description: 'Zerologon - Privilege escalation vulnerability',
            exploit: 'Use: exploit CVE-2020-1472 192.168.2.52'
          }
        ],
        flags: []
      }
    ]
  },

<<<<<<< Updated upstream
  mission3: {
    id: 'mission3',
    title: 'Operation: Dark Protocol',
    difficulty: 'Advanced',
    unlocked: false,
    completed: false,
=======
  // ============= MISSION DEFINITIONS =============
const MISSIONS = [
  {
    id: 'mission_1',
    title: 'First Contact',
    description: 'Learn to scan the network and identify active hosts',
>>>>>>> Stashed changes
    objectives: [
      { id: 'scan-network', text: 'Scan the network for active hosts', completed: false },
      { id: 'enumerate-services', text: 'Enumerate services on discovered hosts', completed: false },
      { id: 'find-vulnerabilities', text: 'Identify vulnerabilities', completed: false },
      { id: 'exploit-target', text: 'Successfully exploit a vulnerability', completed: false },
      { id: 'capture-flags', text: 'Capture all flags (0/4)', completed: false, count: 0, total: 4 }
    ],
<<<<<<< Updated upstream
    network: [
      {
        ip: '10.0.0.200',
        hostname: 'c2-primary',
        type: 'server',
        os: 'Kali Linux (modified)',
        discovered: false,
        exploited: false,
        ports: [
          { port: 8888, protocol: 'tcp', service: 'Custom C2', version: null },
          { port: 22, protocol: 'tcp', service: 'OpenSSH', version: '9.0p1' },
          { port: 443, protocol: 'tcp', service: 'HTTPS', version: null }
        ],
        vulnerabilities: [
          {
            cve: 'WEAK-SSH',
            severity: 'High',
            cvss: 8.0,
            service: 'SSH (Port 22)',
            description: 'Weak SSH credentials detected - brute-forceable',
            exploit: 'Use: exploit WEAK-SSH 10.0.0.200'
          }
        ],
        flags: []
=======
    ghostDialogue: [
      "well, well... another curious mind enters the void.",
      "i'm GHOST. been watching the networks for... a while now.",
      "you want to learn hacking? heh... everyone does.",
      "but here's the thing...",
      "i don't give answers. i give... opportunities.",
      "your first test: find what's hiding in the shadows.",
      "the network range is 192.168.1.0/24.",
      "use your tools. research. think.",
      "type 'hint' if you're really stuck... but that's no fun.",
    ],
    hints: [
      {
        cost: 0,
        text: "Research: What tool is used for network scanning? Try 'nmap' or search online for 'network scanning tools'."
>>>>>>> Stashed changes
      },
      {
        ip: '10.0.0.201',
        hostname: 'payload-server',
        type: 'server',
        os: 'Debian 11',
        discovered: false,
        exploited: false,
        ports: [
          { port: 80, protocol: 'tcp', service: 'nginx', version: '1.18.0' },
          { port: 21, protocol: 'tcp', service: 'vsftpd', version: '3.0.3' }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2021-3156',
            severity: 'Critical',
            cvss: 9.8,
            service: 'sudo',
            description: 'Heap-based buffer overflow in sudo (Baron Samedit)',
            exploit: 'Use: exploit CVE-2021-3156 10.0.0.201'
          }
        ],
        flags: []
      },
      {
<<<<<<< Updated upstream
        ip: '10.0.0.202',
        hostname: 'exfil-node',
        type: 'server',
        os: 'Ubuntu 20.04',
        discovered: false,
        exploited: false,
        ports: [
          { port: 9999, protocol: 'tcp', service: 'Custom exfil service', version: null },
          { port: 22, protocol: 'tcp', service: 'OpenSSH', version: '8.2p1' }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2021-44228',
            severity: 'Critical',
            cvss: 10.0,
            service: 'Log4j (Log4Shell)',
            description: 'Remote code execution via JNDI injection in Log4j',
            exploit: 'Use: exploit CVE-2021-44228 10.0.0.202'
          }
        ],
        flags: []
      },
      {
        ip: '10.0.0.100',
        hostname: 'admin-panel',
        type: 'workstation',
        os: 'Windows 11 Pro',
        discovered: false,
        exploited: false,
        ports: [
          { port: 3389, protocol: 'tcp', service: 'RDP', version: null },
          { port: 445, protocol: 'tcp', service: 'SMB', version: null }
        ],
        vulnerabilities: [
          {
            cve: 'CVE-2019-0708',
            severity: 'Critical',
            cvss: 9.8,
            service: 'RDP (BlueKeep)',
            description: 'Remote code execution vulnerability in Remote Desktop Services',
            exploit: 'Use: exploit CVE-2019-0708 10.0.0.100'
          }
        ],
        flags: []
=======
        cost: 50,
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
>>>>>>> Stashed changes
      }
    ]
  }
};

<<<<<<< Updated upstream
=======
// ============= DIALOGUE COMPONENT =============
function GhostDialogue({ dialogue, onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [frame, setFrame] = useState('idle');
  const [isComplete, setIsComplete] = useState(false);

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
>>>>>>> Stashed changes

// ============= TERMINAL COMPONENT =============
function Terminal({ onCommand, history, currentTarget }) {
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
              ║         DARKNET OPERATIVE - CYBER DEFENSE DIVISION        ║
              ║                                                           ║
              ║  Type 'help' to see available commands                   ║
              ║  Type 'missions' to select a different mission           ║
              ║  Type 'mission' to view current objectives                ║
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

<<<<<<< Updated upstream
// ============= NETWORK MAP COMPONENT =============
=======
// ============= NETWORK MAP =============
>>>>>>> Stashed changes
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
            Use the <code>nmap</code> command to scan the network.
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
                  const centerX = 300;
                  const centerY = 250;
                  
                  return (
                    <line
                      key={`line-${host.ip}`}
                      x1={centerX}
                      y1={centerY}
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

<<<<<<< Updated upstream
// ============= INTEL PANEL COMPONENT =============
function IntelPanel({ selectedHost, onBackToMap }) {
=======
// ============= INTEL PANEL =============
function IntelPanel({ selectedHost }) {
>>>>>>> Stashed changes
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
      {/* Back to Map Button */}
      <button
        onClick={onBackToMap}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)',
          color: 'var(--accent-blue)',
          padding: '10px 16px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--bg-tertiary)';
          e.target.style.borderColor = 'var(--accent-blue)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'var(--bg-secondary)';
          e.target.style.borderColor = 'var(--border-primary)';
        }}
      >
        ← Back to Network Map
      </button>

      {/* Host Information Card */}
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

      {/* Open Ports Card */}
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

      {/* Vulnerabilities Card */}
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

      {/* Exploitation Status */}
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

<<<<<<< Updated upstream
// ============= TOOLS PANEL COMPONENT =============
=======
// ============= TOOLS PANEL =============
>>>>>>> Stashed changes
function ToolsPanel({ onToolClick }) {
  const tools = [
    {
      name: 'nmap',
      description: 'Network Mapper - Discover hosts and scan for open ports on the network.',
      usage: 'nmap <target>',
      example: 'nmap 192.168.1.0/24',
      category: 'reconnaissance'
    },
    {
      name: 'nmap -sV',
      description: 'Service Version Detection - Identifies the versions of services running on open ports.',
      usage: 'nmap -sV <ip>',
      example: 'nmap -sV 192.168.1.100',
      category: 'reconnaissance'
    },
    {
      name: 'searchsploit',
      description: 'Exploit Database Search - Search for known exploits based on software versions.',
      usage: 'searchsploit <service> <version>',
      example: 'searchsploit apache 2.4.49',
      category: 'vulnerability'
    },
    {
      name: 'exploit',
      description: 'Exploit Execution - Attempt to exploit a vulnerability using a known CVE.',
      usage: 'exploit <cve> <target_ip>',
      example: 'exploit CVE-2021-41773 192.168.1.100',
      category: 'exploitation'
    },
    {
      name: 'mission',
      description: 'Mission Objectives - View current mission objectives and progress.',
      usage: 'mission',
      example: 'mission',
      category: 'utility'
    },
    {
      name: 'missions',
      description: 'Mission Selector - Open the mission selection interface.',
      usage: 'missions',
      example: 'missions',
      category: 'utility'
    },
    {
      name: 'help',
      description: 'Command Help - Display all available commands and their usage.',
      usage: 'help',
      example: 'help',
      category: 'utility'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
<<<<<<< Updated upstream
      case 'reconnaissance':
        return 'var(--accent-blue)';
      case 'vulnerability':
        return 'var(--accent-orange)';
      case 'exploitation':
        return 'var(--accent-red)';
      case 'utility':
        return 'var(--accent-green)';
      case 'post-exploitation':
        return 'var(--accent-purple)';
      default:
        return 'var(--text-secondary)';
=======
      case 'reconnaissance': return 'var(--accent-blue)';
      case 'vulnerability': return 'var(--accent-yellow)';
      case 'exploitation': return 'var(--accent-red)';
      case 'post-exploitation': return 'var(--accent-purple)';
      default: return 'var(--text-secondary)';
>>>>>>> Stashed changes
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
          {tool.example && (
            <div style={{
              marginTop: '8px',
              fontSize: '12px',
              color: 'var(--text-muted)',
              fontStyle: 'italic'
            }}>
              Example: <code style={{ 
                background: 'var(--bg-tertiary)', 
                padding: '2px 6px', 
                borderRadius: '3px',
                color: 'var(--accent-blue)'
              }}>{tool.example}</code>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

<<<<<<< Updated upstream
// ============= HINTS PANEL COMPONENT =============
function HintsPanel({ currentObjective, playerXP, objectives }) {
  const [unlockedHints, setUnlockedHints] = useState([]);

  const hints = [
    {
      id: 'hint-1',
      title: '🔍 Getting Started',
      cost: 0,
      objective: 'scan-network',
      content: 'Use the nmap command to discover hosts on the network. Try: nmap 192.168.1.0/24',
      code: 'nmap 192.168.1.0/24'
    },
    {
      id: 'hint-2',
      title: '🔎 Service Enumeration',
      cost: 50,
      objective: 'enumerate-services',
      content: 'After finding a host, use nmap with the -sV flag to detect service versions. This reveals what software is running.',
      code: 'nmap -sV <target_ip>'
    },
    {
      id: 'hint-3',
      title: '🎯 Finding Vulnerabilities',
      cost: 100,
      objective: 'find-vulnerabilities',
      content: 'Once you know the service and version, search for known exploits using searchsploit. Format: searchsploit <service> <version>',
      code: 'searchsploit apache 2.4.49'
    },
    {
      id: 'hint-4',
      title: '💥 Exploitation Basics',
      cost: 150,
      objective: 'exploit-target',
      content: 'When you find a matching CVE, use the exploit command with the CVE number to attempt exploitation.',
      code: 'exploit CVE-2021-41773 192.168.1.100'
    }
  ];

  const unlockHint = (hint) => {
    if (playerXP >= hint.cost && !unlockedHints.includes(hint.id)) {
      setUnlockedHints([...unlockedHints, hint.id]);
    }
  };

  const isHintUnlocked = (hintId) => {
    return unlockedHints.includes(hintId);
  };

  const isHintRelevant = (hint) => {
    // Show all hints always - don't filter by objective
    return true;
  };

  const isObjectiveCompleted = (objectiveId) => {
    if (!objectives) return false;
    const obj = objectives.find(o => o.id === objectiveId);
    return obj ? obj.completed : false;
  };

  const relevantHints = hints.filter(isHintRelevant);

  return (
    <div className="hints-panel">
      <div style={{ 
        padding: '16px', 
        backgroundColor: 'var(--bg-secondary)', 
        borderRadius: '8px', 
        marginBottom: '16px',
        border: '1px solid var(--border-primary)'
      }}>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          💡 Hints help you progress when you're stuck. Some hints cost XP to unlock.
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Your XP: <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{playerXP}</span>
        </div>
      </div>

      {relevantHints.map((hint, index) => {
        const unlocked = isHintUnlocked(hint.id) || hint.cost === 0;
        const objectiveCompleted = isObjectiveCompleted(hint.objective);
        
        return (
          <div
            key={hint.id}
            className={`hint-box fade-in ${!unlocked ? 'locked' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              borderLeftColor: objectiveCompleted ? 'var(--accent-green)' : (unlocked ? 'var(--accent-blue)' : 'var(--border-primary)'),
              opacity: objectiveCompleted ? 0.8 : 1
            }}
          >
            <div className="hint-header">
              <div className="hint-title">
                {hint.title}
                {objectiveCompleted && (
                  <span style={{ 
                    fontSize: '11px', 
                    color: 'var(--accent-green)',
                    marginLeft: '8px'
                  }}>
                    ✓ Complete
                  </span>
                )}
                {!unlocked && !objectiveCompleted && (
                  <span style={{ 
                    fontSize: '11px', 
                    color: 'var(--text-muted)',
                    marginLeft: '8px'
                  }}>
                    🔒 Locked
                  </span>
                )}
              </div>
              {!unlocked && hint.cost > 0 && (
                <button
                  className="hint-unlock-btn"
                  onClick={() => unlockHint(hint)}
                  disabled={playerXP < hint.cost}
                  style={{
                    opacity: playerXP < hint.cost ? 0.5 : 1,
                    cursor: playerXP < hint.cost ? 'not-allowed' : 'pointer'
                  }}
                >
                  Unlock ({hint.cost} XP)
                </button>
              )}
            </div>
            
            {unlocked ? (
              <>
                <div className="hint-content">
                  {hint.content}
                </div>
                {hint.code && (
                  <div className="hint-code">
                    $ {hint.code}
                  </div>
                )}
              </>
            ) : (
              <div className="hint-content" style={{ fontStyle: 'italic', opacity: 0.6 }}>
                This hint is locked. Unlock it to reveal guidance for this objective.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ============= MISSION OBJECTIVES COMPONENT =============
function MissionObjectives({ mission, objectives }) {
=======
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

// ============= MISSION OBJECTIVES =============
function MissionObjectives({ currentMission, objectives }) {
>>>>>>> Stashed changes
  return (
    <div className="mission-objectives">
      <div className="mission-title">
        🎯 Mission: {mission}
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

<<<<<<< Updated upstream
// ============= MAIN APP COMPONENT =============
function App() {
  const [activeTab, setActiveTab] = useState('network');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [playerXP, setPlayerXP] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [currentMission, setCurrentMission] = useState('Breach the Corporate Network');
  const [currentTarget, setCurrentTarget] = useState(null);
  const [selectedHost, setSelectedHost] = useState(null);
  const [discoveredHosts, setDiscoveredHosts] = useState([]);
  
  const [objectives, setObjectives] = useState([
    { id: 'scan-network', text: 'Scan the network for active hosts', completed: false },
    { id: 'enumerate-services', text: 'Enumerate services on discovered hosts', completed: false },
    { id: 'find-vulnerabilities', text: 'Identify at least 2 vulnerabilities', completed: false },
    { id: 'exploit-target', text: 'Successfully exploit a vulnerability', completed: false },
    { id: 'capture-flag', text: 'Capture the flag', completed: false }
  ]);
=======
// ============= HINTS PANEL =============
function HintsPanel({ currentMission, playerXP, onUnlockHint }) {
  const mission = MISSIONS.find(m => m.id === currentMission);
  const [unlockedHints, setUnlockedHints] = useState([0]);
>>>>>>> Stashed changes

  const networkTopology = [
    {
      ip: '192.168.1.100',
      hostname: 'web-server-01',
      type: 'server',
      os: 'Linux Ubuntu 20.04',
      discovered: false,
      exploited: false,
      ports: [
        { port: 80, protocol: 'tcp', service: 'Apache httpd', version: '2.4.49' },
        { port: 443, protocol: 'tcp', service: 'Apache httpd', version: '2.4.49' },
        { port: 22, protocol: 'tcp', service: 'OpenSSH', version: '8.2p1' }
      ],
      vulnerabilities: [
        {
          cve: 'CVE-2021-41773',
          severity: 'Critical',
          cvss: 9.8,
          service: 'Apache httpd 2.4.49',
          description: 'Path traversal and remote code execution vulnerability in Apache HTTP Server 2.4.49',
          exploit: 'Use: exploit CVE-2021-41773 192.168.1.100'
        }
      ],
      flags: []
    },
    {
      ip: '192.168.1.101',
      hostname: 'db-server-01',
      type: 'database',
      os: 'Windows Server 2019',
      discovered: false,
      exploited: false,
      ports: [
        { port: 3306, protocol: 'tcp', service: 'MySQL', version: '5.7.32' },
        { port: 445, protocol: 'tcp', service: 'SMB', version: null }
      ],
      vulnerabilities: [
        {
          cve: 'CVE-2020-1472',
          severity: 'Critical',
          cvss: 10.0,
          service: 'SMB (Zerologon)',
          description: 'Elevation of privilege vulnerability in Netlogon Remote Protocol',
          exploit: 'Use: exploit CVE-2020-1472 192.168.1.101'
        }
      ],
      flags: []
    },
    {
      ip: '192.168.1.102',
      hostname: 'workstation-05',
      type: 'workstation',
      os: 'Windows 10',
      discovered: false,
      exploited: false,
      ports: [
        { port: 445, protocol: 'tcp', service: 'SMB', version: null }
      ],
      vulnerabilities: [
        {
          cve: 'CVE-2017-0144',
          severity: 'Critical',
          cvss: 8.1,
          service: 'SMB (EternalBlue)',
          description: 'Remote code execution vulnerability in Microsoft SMBv1',
          exploit: 'Use: exploit CVE-2017-0144 192.168.1.102'
        }
      ],
      flags: []
    }
  ];
}
  const handleCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    const parts = cmd.split(' ');
    const baseCommand = parts[0];

    const newHistoryItem = {
      prompt: currentTarget ? `operative@darknet:~/${currentTarget}$` : 'operative@darknet:~$',
      command: command,
      output: '',
      type: ''
    };

    switch (baseCommand) {
      case 'help':
        newHistoryItem.output = `Available Commands:
  help              - Display this help message
  clear             - Clear the terminal
  mission           - View current mission objectives
  nmap <target>     - Scan network for hosts
  nmap -sV <ip>     - Enumerate services on a host
  searchsploit <service> <version> - Search for exploits
  exploit <cve> <ip> - Attempt to exploit a vulnerability
  whoami            - Display current user info`;
        newHistoryItem.type = 'info';
        break;

      case 'clear':
        setTerminalHistory([]);
        return;

      case 'mission':
        const completedCount = objectives.filter(obj => obj.completed).length;
        newHistoryItem.output = `Current Mission: ${currentMission}

Objectives (${completedCount}/${objectives.length} completed):
${objectives.map((obj, i) => `  ${obj.completed ? '✓' : '○'} ${obj.text}`).join('\n')}

XP: ${playerXP} | Level: ${playerLevel}`;
        newHistoryItem.type = 'info';
        break;

      case 'whoami':
        newHistoryItem.output = `Operative ID: DARKNET-USER-001
Clearance Level: ${playerLevel}
XP: ${playerXP}
Status: Active`;
        newHistoryItem.type = 'info';
        break;

      case 'nmap':
        if (parts.length < 2) {
          newHistoryItem.output = 'Usage: nmap <target> or nmap -sV <target>';
          newHistoryItem.type = 'error';
        } else if (parts[1] === '-sv' && parts[2]) {
          handleServiceEnumeration(parts[2], newHistoryItem);
        } else {
          handleNetworkScan(parts[1], newHistoryItem);
        }
        break;

      case 'searchsploit':
        if (parts.length < 3) {
          newHistoryItem.output = 'Usage: searchsploit <service> <version>';
          newHistoryItem.type = 'error';
        }
    }
  }
// ============= MISSION SELECTOR COMPONENT =============
function MissionSelector({ missions, currentMission, onSelectMission }) {
  return (
<<<<<<< Updated upstream
    <div style={{
      padding: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
      height: '100%',
      overflowY: 'auto'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '32px',
          color: 'var(--text-primary)',
          marginBottom: '12px',
          fontWeight: 600
        }}>
          Mission Selection
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)'
        }}>
          Choose your mission, Operative
        </p>
=======
    <div className="hints-panel">
      <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent-purple)' }}>
        <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--accent-purple)' }}>
          💭 GHOST's Wisdom
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          "hints are for those who seek... but remember, the best lessons come from figuring it out yourself."
        </div>
>>>>>>> Stashed changes
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {Object.values(missions).map((mission) => {
          const isLocked = !mission.unlocked;
          const isCurrent = mission.id === currentMission;

          return (
            <div
              key={mission.id}
              onClick={() => !isLocked && onSelectMission(mission.id)}
              style={{
                background: 'var(--bg-secondary)',
                border: `2px solid ${isCurrent ? 'var(--accent-blue)' : 'var(--border-primary)'}`,
                borderRadius: '12px',
                padding: '24px',
                cursor: isLocked ? 'not-allowed' : 'pointer',
                opacity: isLocked ? 0.5 : 1,
                transition: 'all 0.3s',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!isLocked) {
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLocked && !isCurrent) {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {/* Status Badges */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                gap: '8px'
              }}>
                {isLocked && (
                  <span style={{
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-muted)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>
                    🔒 LOCKED
                  </span>
                )}
                {mission.completed && (
                  <span style={{
                    background: 'rgba(86, 211, 100, 0.2)',
                    color: 'var(--accent-green)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>
                    ✓ COMPLETE
                  </span>
                )}
                {isCurrent && !isLocked && (
                  <span style={{
                    background: 'rgba(88, 166, 255, 0.2)',
                    color: 'var(--accent-blue)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>
                    ▶ ACTIVE
                  </span>
                )}
              </div>

              {/* Mission Info */}
              <div style={{ marginTop: '16px' }}>
                <h2 style={{
                  fontSize: '20px',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  fontWeight: 600
                }}>
                  {mission.title}
                </h2>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-tertiary)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    {mission.difficulty}
                  </span>
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)'
                  }}>
                    {mission.network.length} hosts
                  </span>
                </div>

                <div style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {mission.objectives.length} objectives
                </div>

                {isLocked && (
                  <div style={{
                    marginTop: '16px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic'
                  }}>
                    Complete previous missions to unlock
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <button
          onClick={() => onSelectMission(null)}
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)',
            color: 'var(--text-primary)',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = 'var(--accent-blue)';
            e.target.style.color = 'var(--accent-blue)';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = 'var(--border-primary)';
            e.target.style.color = 'var(--text-primary)';
          }}
        >
          Return to Mission
        </button>
      </div>
    </div>
  );
}

// ============= MAIN APP COMPONENT =============
function App() {
  // Mission Management State
  const [currentMissionId, setCurrentMissionId] = useState('mission1');
  const [missionStates, setMissionStates] = useState(MISSIONS);
  const [showMissionSelector, setShowMissionSelector] = useState(false);

  // Get current mission data
  const getCurrentMission = () => missionStates[currentMissionId];
  const currentMissionData = getCurrentMission();

  // Core Game State
  const [activeTab, setActiveTab] = useState('network');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [playerXP, setPlayerXP] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);
<<<<<<< Updated upstream
  const [currentMission, setCurrentMission] = useState(currentMissionData.title);
  const [currentTarget, setCurrentTarget] = useState(null);
=======
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
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
>>>>>>> Stashed changes
  const [selectedHost, setSelectedHost] = useState(null);
  
  // Mission-specific State  
  const [discoveredHosts, setDiscoveredHosts] = useState(
    currentMissionData.network.map(host => ({ ...host }))
  );
  const [objectives, setObjectives] = useState(
    currentMissionData.objectives.map(obj => ({ ...obj }))
  );

<<<<<<< Updated upstream
  // Mission Selection Handler
  const handleSelectMission = (missionId) => {
    if (missionId === null) {
      setShowMissionSelector(false);
      return;
    }

    const mission = missionStates[missionId];
    if (!mission.unlocked) return;

    setCurrentMissionId(missionId);
    setCurrentMission(mission.title);
    setObjectives(mission.objectives.map(obj => ({ ...obj })));
    setDiscoveredHosts(mission.network.map(host => ({ ...host })));
    setTerminalHistory([]);
    setSelectedHost(null);
    setShowMissionSelector(false);
=======
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

    if (cmd === 'talk' || cmd === 'ghost') {
      if (!hasMetGhost) {
        setHasMetGhost(true);
        updateObjective('talk_to_ghost', true);
        awardXP(50);
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

💡 TIP: Research is your best friend. Use man pages, CVE databases,
and search engines to learn about the tools and techniques.`;
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
>>>>>>> Stashed changes
    setActiveTab('network');
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  // Mission Unlock Logic
  const unlockNextMission = (completedMissionId) => {
    const missionOrder = ['mission1', 'mission2', 'mission3'];
    const currentIndex = missionOrder.indexOf(completedMissionId);
    
    if (currentIndex < missionOrder.length - 1) {
      const nextMissionId = missionOrder[currentIndex + 1];
      setMissionStates(prev => ({
        ...prev,
        [completedMissionId]: { ...prev[completedMissionId], completed: true },
        [nextMissionId]: { ...prev[nextMissionId], unlocked: true }
      }));
      
      return nextMissionId;
    } else {
      // Mark final mission as complete
      setMissionStates(prev => ({
        ...prev,
        [completedMissionId]: { ...prev[completedMissionId], completed: true }
      }));
    }
    
    return null;
  };

  // Check if all flags captured for mission
  const checkMissionComplete = () => {
    const totalHosts = discoveredHosts.length;
    const exploitedHosts = discoveredHosts.filter(h => h.exploited).length;
    
    if (exploitedHosts === totalHosts && totalHosts > 0) {
      const nextMission = unlockNextMission(currentMissionId);
      
      if (nextMission) {
        const nextMissionData = missionStates[nextMission];
        const notification = {
          prompt: 'SYSTEM',
          command: '',
          output: `
╔═══════════════════════════════════════════════════════╗
║           MISSION COMPLETE!                           ║
╠═══════════════════════════════════════════════════════╣
║  Excellent work, Operative!                           ║
║                                                       ║
║  New mission unlocked: ${nextMissionData.title}       
║                                                       ║
║  Type 'missions' to select the next mission          ║
╚═══════════════════════════════════════════════════════╝`,
          type: 'success'
        };
        setTerminalHistory(prev => [...prev, notification]);
      } else {
        const notification = {
          prompt: 'SYSTEM',
          command: '',
          output: `
╔═══════════════════════════════════════════════════════╗
║    🎉 ALL MISSIONS COMPLETE! 🎉                       ║
╠═══════════════════════════════════════════════════════╣
║  Congratulations, Operative!                          ║
║                                                       ║
║  You have successfully completed all missions.        ║
║  You are now a certified Darknet Operative.           ║
║                                                       ║
║  ACHIEVEMENT UNLOCKED: Master Operative               ║
╚═══════════════════════════════════════════════════════╝`,
          type: 'success'
        };
        setTerminalHistory(prev => [...prev, notification]);
      }
    }
  };

  // Command Handler
  const handleCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    const parts = cmd.split(' ');
    const baseCommand = parts[0];

    const newHistoryItem = {
      prompt: currentTarget ? `operative@darknet:~/${currentTarget}$` : 'operative@darknet:~$',
      command: command,
      output: '',
      type: ''
    };

    switch (baseCommand) {
      case 'help':
        newHistoryItem.output = `Available Commands:
  help              - Display this help message
  clear             - Clear the terminal
  missions          - Open mission selector
  mission           - View current mission objectives
  nmap <target>     - Scan network for hosts
  nmap -sV <ip>     - Enumerate services on a host
  searchsploit <service> <version> - Search for exploits
  exploit <cve> <ip> - Attempt to exploit a vulnerability
  whoami            - Display current user info`;
        newHistoryItem.type = 'info';
        break;

      case 'clear':
        setTerminalHistory([]);
        return;

      case 'missions':
        setShowMissionSelector(true);
        newHistoryItem.output = 'Opening mission selector...';
        newHistoryItem.type = 'info';
        break;

      case 'mission':
        const completedCount = objectives.filter(obj => obj.completed).length;
        newHistoryItem.output = `Current Mission: ${currentMission}
Difficulty: ${currentMissionData.difficulty}

Objectives (${completedCount}/${objectives.length} completed):
${objectives.map((obj, i) => `  ${obj.completed ? '✓' : '○'} ${obj.text}`).join('\n')}

XP: ${playerXP} | Level: ${playerLevel}`;
        newHistoryItem.type = 'info';
        break;

      case 'whoami':
        newHistoryItem.output = `Operative ID: DARKNET-USER-001
Clearance Level: ${playerLevel}
Current Mission: ${currentMission}
XP: ${playerXP}
Status: Active`;
        newHistoryItem.type = 'info';
        break;

      case 'nmap':
        if (parts.length < 2) {
          newHistoryItem.output = 'Usage: nmap <target> or nmap -sV <target>';
          newHistoryItem.type = 'error';
        } else if (parts[1] === '-sv' && parts[2]) {
          handleServiceEnumeration(parts[2], newHistoryItem);
        } else {
          handleNetworkScan(parts[1], newHistoryItem);
        }
        break;

      case 'searchsploit':
        if (parts.length < 3) {
          newHistoryItem.output = 'Usage: searchsploit <service> <version>';
          newHistoryItem.type = 'error';
        } else {
          handleSearchSploit(parts[1], parts[2], newHistoryItem);
        }
        break;

      case 'exploit':
        if (parts.length < 3) {
          newHistoryItem.output = 'Usage: exploit <cve> <target_ip>';
          newHistoryItem.type = 'error';
        } else {
          handleExploit(parts[1], parts[2], newHistoryItem);
        }
        break;

      default:
        newHistoryItem.output = `Command not found: ${baseCommand}\nType 'help' for available commands.`;
        newHistoryItem.type = 'error';
    }

    setTerminalHistory([...terminalHistory, newHistoryItem]);
  };

  // Network Scan Handler
  const handleNetworkScan = (target, historyItem) => {
    // Extract network prefix from current mission
    const networkPrefix = currentMissionData.network[0].ip.split('.').slice(0, 3).join('.');
    
    if (target.includes(networkPrefix)) {
      const discovered = currentMissionData.network.map(host => ({
        ...host,
        discovered: true
      }));
      
      setDiscoveredHosts(discovered);
      
      historyItem.output = `Starting Nmap scan on ${target}...

Nmap scan report for ${target}
Host discovery completed. ${discovered.length} hosts found:

${discovered.map(host => `  ${host.ip} - ${host.hostname || 'Unknown'} (${host.os || 'Unknown OS'})`).join('\n')}

Scan complete. Use 'nmap -sV <ip>' to enumerate services.`;
      historyItem.type = 'success';
      
      updateObjective('scan-network', true);
      awardXP(100);
    } else {
      historyItem.output = `Invalid target for current mission. Try scanning ${networkPrefix}.0/24`;
      historyItem.type = 'error';
    }
  };

  // Service Enumeration Handler
  const handleServiceEnumeration = (ip, historyItem) => {
    const host = discoveredHosts.find(h => h.ip === ip);
    
    if (!host) {
      historyItem.output = `Host ${ip} not found. Scan the network first.`;
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
<<<<<<< Updated upstream
    
    updateObjective('enumerate-services', true);
=======
>>>>>>> Stashed changes
    awardXP(75);
    setSelectedHost(host);
    setActiveTab('intel');
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  // SearchSploit Handler
  const handleSearchSploit = (service, version, historyItem) => {
    const searchTerm = `${service} ${version}`.toLowerCase();
    let foundVulns = [];

    discoveredHosts.forEach(host => {
      host.vulnerabilities?.forEach(vuln => {
        if (vuln.service.toLowerCase().includes(searchTerm) || 
            vuln.service.toLowerCase().includes(service.toLowerCase())) {
          foundVulns.push({ ...vuln, hostIp: host.ip });
        }
      });
    });

    if (foundVulns.length > 0) {
      historyItem.output = `Searching exploit database for: ${service} ${version}

Found ${foundVulns.length} exploit(s):

${foundVulns.map((vuln, i) => 
  `[${i + 1}] ${vuln.cve} - ${vuln.description}
    Target: ${vuln.hostIp}
    Severity: ${vuln.severity} (CVSS: ${vuln.cvss})
    ${vuln.exploit}`
).join('\n\n')}`;
      historyItem.type = 'success';
      
      updateObjective('find-vulnerabilities', true);
      awardXP(150);
    } else {
      historyItem.output = `No exploits found for ${service} ${version}`;
      historyItem.type = 'warning';
    }
    setTerminalHistory(prev => [...prev, historyItem]);
  };

  // Exploit Handler
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
      historyItem.output = `Vulnerability ${cve} not found on target ${targetIp}.`;
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
    }

    historyItem.output = `[*] Initializing exploit ${cve}...
[*] Sending payload to ${targetIp}...
[+] Exploit successful!
[+] Shell obtained on ${targetIp}
[+] Access level: ROOT
[+] Flag captured: FLAG{${cve}_EXPLOITED_SUCCESSFULLY}

You now have full control of ${host.hostname}!${nextTargetMessage}`;
    historyItem.type = 'success';
<<<<<<< Updated upstream
    
    updateObjective('exploit-target', true);
    
    // Update flag counter
    const flagObjective = objectives.find(o => o.id === 'capture-flags');
    if (flagObjective) {
      const newCount = exploitedCount;
      const updatedObjectives = objectives.map(obj => {
        if (obj.id === 'capture-flags') {
          const completed = newCount >= obj.total;
          return {
            ...obj,
            text: `Capture all flags (${newCount}/${obj.total})`,
            count: newCount,
            completed
          };
        }
        return obj;
      });
      setObjectives(updatedObjectives);
      
      if (newCount >= flagObjective.total) {
        updateObjective('capture-flags', true);
      }
    }
    
    awardXP(300);
    setActiveTab('intel');
    
    // Check if mission is complete
    setTimeout(() => checkMissionComplete(), 500);
=======
    awardXP(300);
    setActiveTab('intel');
    setTerminalHistory(prev => [...prev, historyItem]);
>>>>>>> Stashed changes
  };

  // Helper Functions
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

<<<<<<< Updated upstream
=======
  const handleUnlockHint = (cost) => {
    setPlayerXP(prev => prev - cost);
  };

>>>>>>> Stashed changes
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
            title={isMusicPlaying ? 'Mute music' : 'Unmute music'}
          >
            {isMusicPlaying ? '🔊' : '🔇'}
          </button>
          <div className="stat-item">
            <span>Mission:</span>
            <span className="stat-value">{currentMissionData.difficulty}</span>
          </div>
          <div className="stat-item">
            <span>Hosts:</span>
            <span className="stat-value">{discoveredHosts.filter(h => h.discovered).length}</span>
          </div>
        </div>
      </div>

<<<<<<< Updated upstream
      {showMissionSelector ? (
        <MissionSelector 
          missions={missionStates}
          currentMission={currentMissionId}
          onSelectMission={handleSelectMission}
        />
      ) : (
        <>
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

          <div className="main-content">
            <Terminal 
              onCommand={handleCommand}
              history={terminalHistory}
              currentTarget={currentTarget}
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
                  <IntelPanel 
                    selectedHost={selectedHost}
                    onBackToMap={() => setActiveTab('network')}
                  />
                )}
                {activeTab === 'tools' && (
                  <ToolsPanel 
                    onToolClick={handleToolClick}
                  />
                )}
                {activeTab === 'hints' && (
                  <HintsPanel 
                    currentObjective={objectives.find(o => !o.completed)?.id}
                    playerXP={playerXP}
                    objectives={objectives}
                  />
                )}
              </div>
            </div>
          </div>

          <MissionObjectives 
            mission={currentMission}
            objectives={objectives}
          />
        </>
      )}
=======
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
>>>>>>> Stashed changes
    </div>
  );
}
export default App;