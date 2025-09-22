# Blockchain Land Registry System

A modern, professional web application prototype for a blockchain-based land registry system designed to prevent property fraud in urban India. Built with React, TypeScript, and Tailwind CSS featuring glassmorphism design principles.

## 🌟 Features

### Core Functionality
- **Property Registration**: Register new properties with document uploads and blockchain NFT minting simulation
- **Interactive Map Interface**: Visual representation of land parcels with clickable property details
- **Ownership Transfer**: Secure property transfer system with multi-signature simulation
- **Dashboard**: Comprehensive property management with statistics and transaction history
- **Document Management**: Upload and verify property documents with hash generation

### Design Highlights
- **Glassmorphism UI**: Modern glass-effect cards with backdrop blur
- **Responsive Design**: Optimized for desktop and mobile devices
- **Purple-Blue Gradient Theme**: Professional color scheme throughout
- **Smooth Animations**: Hover effects and micro-interactions
- **Professional Typography**: Clean Inter font implementation

## 🚀 Live Demo

Visit the live application: [https://blockchain-land-regi-uqez.bolt.host](https://blockchain-land-regi-uqez.bolt.host)

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Bolt Hosting

## 📱 Pages & Components

### 1. Landing Page
- Hero section with gradient background
- Feature highlights with animated cards
- Statistics showcase
- Call-to-action buttons

### 2. Map Interface
- Interactive land parcel visualization
- Property status indicators (Verified/Pending/Disputed)
- Modal popups with detailed property information
- Color-coded legend

### 3. Register Property
- Multi-step property registration form
- Drag-and-drop file upload interface
- Document type detection and preview
- NFT minting simulation

### 4. Transfer Ownership
- Wallet address input and validation
- Multi-signature transfer process
- Real-time status updates
- Success confirmation with transaction hash

### 5. Dashboard
- Property portfolio overview
- Transaction history
- Quick action buttons
- Statistics cards with gradient backgrounds

## 🎨 Design System

### Colors
- Primary Gradient: `#3c1053` → `#ad5389`
- Background: Purple-blue gradient (`from-purple-900 via-blue-900 to-indigo-900`)
- Glass Cards: `bg-white/10` with `backdrop-blur-xl`
- Status Colors: Green (verified), Yellow (pending), Red (disputed)

### Typography
- Font Family: Inter
- Headings: Bold weights with proper hierarchy
- Body Text: Regular weight with good contrast ratios

### Components
- Glassmorphism cards with rounded corners
- Gradient buttons with hover animations
- Status badges with appropriate colors
- Modal overlays with blur backgrounds

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blockchain-land-registry
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with sidebar
│   ├── Modal.tsx       # Modal component
│   └── Badge.tsx       # Status badge component
├── pages/              # Page components
│   ├── LandingPage.tsx
│   ├── MapInterface.tsx
│   ├── RegisterProperty.tsx
│   ├── TransferOwnership.tsx
│   └── Dashboard.tsx
├── data/               # Mock data and types
│   └── mockData.ts
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
└── main.tsx           # Entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Mock Data

The application uses mock data to simulate:
- Property records with NFT IDs
- User profiles and wallet addresses
- Transaction history
- Document hashes and metadata

## 🔮 Future Enhancements

- Integration with actual blockchain networks
- Real wallet connectivity (MetaMask, WalletConnect)
- IPFS document storage
- Smart contract integration
- Multi-language support
- Advanced map features with satellite imagery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern fintech applications
- Glassmorphism design principles
- React and TypeScript communities
- Tailwind CSS for rapid styling

## 📞 Contact

For questions or support, please open an issue in the repository.

---

**Note**: This is a prototype application for demonstration purposes. For production use, implement proper blockchain integration, security measures, and data validation.