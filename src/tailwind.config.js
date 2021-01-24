module.exports = {
  purge: ['./pages/**/*.js', './components/*.js'],
  theme: {
    screens: {
      'sm': '700px',
      'md': '1024px',
      'lg': '1440px',
    },
    colors: {
      'main': '#2B8275',
      'secondary': '#2B2C28',
      'tertiary': '#F7B501',
      'white': '#fff',
      'black': '#000',
      'light-grey': 'rgba(0, 0, 0, 0.3)',
      'almost-white': '#fcfcff',
      'code-black': '#1e1e1e',
    },
    spacing: {
      '0': '0',
      '1': '4px',
      '2': '8px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '84px',
    },
    maxHeight: {
      '0': '0',
    },
    maxWidth: {
      '250': '250px',
      '340': '340px',
      '600': '600px',
      '750': '750px',
      'wrapper': '1100px',
    },
    boxShadow: {
      md: '0 7px 30px -10px rgba(150,170,180,0.5)',
    },
    gridTemplateColumns: {
      'landing-blog-sm': 'repeat(auto-fill, minmax(100%, 1fr));',
      'landing-blog-lg': 'repeat(auto-fill, minmax(400px, 1fr));',
    },
    opacity: {
      '95': '0.95'
    },
    backgroundImage: (theme) => ({
      'logo-black-small': "url('/images/test.png')",
      'logo-white-small': "url('/images/logo-white-small.png')",
      'logo-white-large': "url('/images/logo-white-large.png')",
      'logo-black-large': "url('/images/logo-black-large.png')",
      'blog-blob-landing': "url('/images/blog-blob.svg')",
      'blog-home-blob': "url('/images/blog-home-blob.svg')",
      'blog-home-blob-2': "url('/images/blog-home-blob-2.svg')",
    })
  },
  variants: {},
  plugins: [],
}

