# Project Structure

```
clickable-circle/
├── assets/               # Static assets
│   ├── sounds/          # Sound files
│   │   └── readme.md
│   └── images/          # Image files
│       └── readme.md
├── src/                 # Source code
│   ├── screensavers/    # Screensaver implementations
│   │   ├── bacon.js
│   ├── wallpapers/      # Wallpaper implementations
│   │   └── nuclear_powerplant.js
│   ├── sounds/          # Sound effect classes
│   │   └── sizzle.js
│   └── utils/           # Utility classes
│       ├── screensaver.js
│       └── wallpaper.js
├── tests/               # Test files
│   ├── screensavers/
│   ├── wallpapers/
│   │   └── nuclear_powerplant.test.js
│   ├── sounds/
│   │   └── sizzle.test.js
│   ├── utils/
│   │   ├── screensaver.test.js
│   │   └── wallpaper.test.js
│   ├── test-runner.html # HTML test runner
│   └── coverage/        # Test coverage reports
├── index.html           # Main application
├── jest.config.js       # Jest configuration
├── babel.config.js      # Babel configuration
├── package.json         # Package configuration
├── .gitignore           # Git ignore rules
├── README.md            # Project overview
├── CONTRIBUTING.md      # Contribution guidelines
└── PROJECT_STRUCTURE.md # This file
```

## Usage

1. **Install dependencies**: `npm install`
2. **Run development server**: `npm start`
3. **Run tests**: `npm test`
4. **Open test runner**: Open `tests/test-runner.html` in browser

## Adding New Features

1. Create new files in appropriate `src/` subdirectory
2. Add tests in `tests/` subdirectory
3. Update `index.html` to include new components
