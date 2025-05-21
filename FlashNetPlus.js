const flashcards = [
  { front: 'What does OSI stand for in the OSI model?', back: 'Open Systems Interconnection' },
  { front: 'What is the unit of data called at the Data Link Layer?', back: 'Frame' },
  { front: 'What layer of the OSI model is responsible for routing and forwarding data?', back: 'Network Layer' },
  { front: 'At which OSI layer does encryption typically occur?', back: 'Presentation Layer' },
  { front: 'Which layer of the OSI model is responsible for establishing, managing, and terminating connections?', back: 'Session Layer' },
  { front: 'What is the primary function of the Physical Layer in the OSI model?', back: 'Transmission of raw bits over a physical medium' },
  { front: 'Which OSI layer is responsible for error detection and correction?', back: 'Data Link Layer' },
  { front: 'Which layer of the OSI model uses protocols like TCP and UDP?', back: 'Transport Layer' },
  { front: 'What is the primary purpose of the Application Layer in the OSI model?', back: 'To provide user interfaces and network services' },
  { front: 'Which OSI layer is responsible for packet sequencing and acknowledgment?', back: 'Transport Layer' },
  { front: 'Which layer of the OSI model is responsible for IP addressing?', back: 'Network Layer' },
  { front: 'Which OSI layer is responsible for translating data formats between different systems?', back: 'Presentation Layer' },
  { front: 'What is the primary function of the Session Layer in the OSI model?', back: 'To establish and terminate communication sessions' },
  { front: 'Which OSI layer is responsible for the physical addressing of devices?', back: 'Data Link Layer' },
  { front: 'Which layer of the OSI model is responsible for routing packets between networks?', back: 'Network Layer' },
  { front: 'What does ICMP stand for?', back: 'Internet Control Message Protocol' },
  { front: 'Which protocol is used to test connectivity between two devices on a network?', back: 'Internet Control Message Protocol (ICMP)' },
  { front: 'A Hub operates at what layer of the OSI model?', back: 'Physical Layer' },
  { front: 'What is the difference between a Hub and a Switch?', back: 'A Hub broadcasts data to all devices, while a Switch sends data only to the intended recipient.' },
  { front: 'What is the primary advantage of using a mesh network topology?', back: 'High redundancy and fault tolerance.' },
  { front: 'What does DMZ stand for?', back: 'Demilitarized Zone' },
  { front: 'What is the primary purpose of a DMZ in network implementations?', back: 'To provide a buffer zone between internal and external networks.' },
  { front: 'What is the primary purpose of a Network Switch?', back: 'To forward data between devices within the same network.' },
  { front: 'What is the primary function of a network bridge?', back: 'To connect two segments of the same network.' },
  { front: 'What is the primary purpose of a proxy server in network implementations?', back: 'To act as an intermediary between clients and servers.' },
  { front: 'Which type of network topology uses a single cable to connect all devices?', back: 'Bus Topology' },
  { front: 'What is the primary advantage of using fiber optic cables in network implementations?', back: 'High-speed data transmission over long distances.' },
  { front: 'What does SNMP stand for?', back: 'Simple Network Management Protocol' },
  { front: 'Which protocol is commonly used for network device management?', back: 'Simple Network Message Protocol (SNMP)' },
  { front: 'What tool is commonly used to capture and analyze network traffic?', back: 'Wireshark' },
  { front: 'Which command is used to test the reachability of a host on a network?', back: 'Ping' },
  { front: 'What does NTP stand for?', back: 'Network Time Protocol' },
  { front: 'Which protocol is used to synchronize time across network devices?', back: 'NTP' },
  { front: 'What does SLA stand for?', back: 'Service Level Agreement' },
  { front: 'Which command is used to display active network connections on a device?', back: 'Netstat' },
  { front: 'What is the purpose of a patch management process in network operations?', back: 'To ensure that devices are updated with the latest security fixes.' },
  { front: 'Which tool is used to trace the path packets take to reach a destination?', back: 'Traceroute' },
  { front: 'Which protocol is used to securely manage network devices over an encrypted connection?', back: 'SSH' },
  { front: 'Which tool is used to detect vulnerabilities in a network by scanning for open ports and services?', back: 'Nmap' },
  { front: 'Which type of malware is designed to replicate itself and spread across networks?', back: 'Worm' },
  { front: 'What does IDS stand for?', back: 'Intrusion Detection Systems' },
  { front: 'What is the purpose of intrusion detection systems (IDS)?', back: 'To monitor and detect suspicious activity on a network' },
  { front: 'Which type of attack involves intercepting and altering communication between two parties?', back: 'Man-in-the-middle attack' },
  { front: 'What is the purpose of a honeypot in network security?', back: 'To lure attackers and analyze their behavior' },
  { front: 'What is the purpose of a digital certificate in network security?', back: 'To verify the identity of a website or a user' },
  { front: 'What does a flashing amber light on a network switch port typically indicate?', back: 'The port is experiencing errors or collisions' },
  { front: 'Which command is used to display the IP configuration of a device?', back: 'Ipconfig for Windows or Ifconfig for Linux' },
  { front: 'What is the purpose of a loopback test in troubleshooting?', back: 'To verify the functionality of a network interface card (NIC)' },
  { front: 'What does ARP stand for?', back: 'Address Resolution Protocol' },
  { front: 'Which protocol is used to resolve IP addresses to MAC addresses?', back: 'ARP' },
  { front: 'What is the purpose of the netstat command in troubleshooting?', back: 'To display active network connections and statistics' },
  { front: 'Which type of cable issue is most likely to cause intermittent connectivity problems?', back: 'A loose connector' },
  { front: 'What is the purpose of a packet sniffer in troubleshooting?', back: 'To capture and analyze network traffic' },
  { front: 'Which command is used to test DNS resolution?', back: 'Nslookup' },
  { front: 'How many bits are in an IPv4 address?', back: '32 bits' },
  { front: 'How many bits are in an IPv6 address?', back: '128 bits' },
  { front: 'What does IPsec stand for?', back: 'Internet Protocol Security' },
  { front: 'Which IP version includes built-in security features like IPsec?', back: 'IPv6' },
  { front: 'What is the loopback address in IPv6?', back: '::1' },
  { front: 'What is the purpose of NAT (Network Address Translation) in IPv4?', back: 'To extend the limited address space of IPv4' },
  { front: 'Which IPv6 address type is equivalent to a private IPv4 address?', back: 'Unique Local' },
  { front: 'What is the prefix length of a typical IPv6 link-local address?', back: '/64' },
  { front: 'What is the IPv6 equivalent of the IPv4 APIPA range (169.254.0.0/16)?', back: 'FE80::/10' },
  { front: 'What does PSK stand for?', back: 'Pre-Shared Key' },
  { front: 'Name the different types of wireless standards.', back: '802.11, 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ax' },
  { front: 'Which wireless standard uses a frequency of 5GHz and supports 54Mbps?', back: '802.11a' },
  { front: 'Which wireless standard operates at 2.4GHz and supports 11Mbps?', back: '802.11b' },
  { front: 'Which wireless standard operates at 2.4GHz and supports 54Mbps?', back: '802.11g' },
  { front: 'Which wireless standard supports MIMO, 54Mbps, and both 2.4GHz and 5GHz frequencies?', back: '802.11n' },
  { front: 'Which wireless standard works mostly on 5GHz and supports speeds of 1Gbps?', back: '802.11ac' },
  { front: 'Which wireless standard is optimized for high efficiency, crowded networks, and supports speeds of up to 10Gbps?', back: '802.11ax' },
];
let currentCardIndex = 0;
const flashcardContainer = document.getElementById('flashcard-container');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const prevBtn = document.getElementById('prev-btn');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');

function updateCard() {
  front.textContent = flashcards[currentCardIndex].front;
  back.textContent = flashcards[currentCardIndex].back;
}

function showFront() {
  front.style.display = 'block';
  back.style.display = 'none';
}

function showBack() {
  front.style.display = 'none';
  back.style.display = 'block';
}

prevBtn.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
  showFront();
});

nextBtn.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  updateCard();
  showFront();
});

flipBtn.addEventListener('click', () => {
  if (back.style.display == 'block'){ //if showing front
    showFront();
  } else{
    showBack();
  }
});

updateCard();
showFront();
