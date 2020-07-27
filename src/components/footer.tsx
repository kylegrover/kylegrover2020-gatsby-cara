/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Kyle Grover &copy; {new Date().getFullYear()}. All rights reserved. | Built with <Link aria-label="Link to the website framework" href="https://www.gatsbyjs.org">Gatsby</Link> & <Link aria-label="Link to the hosting platform" href="https://www.netlify.com">Netlify</Link>
      <br />
      Previous versions of my website: <Link aria-label="Link to the 2019 archive of this website" href="https://2019.kylegrover.com">2017</Link> | <Link aria-label="Link to the 2019 archive of this website" href="https://2019.kylegrover.com">2018</Link>
    </Box>
  )
}

export default Footer
