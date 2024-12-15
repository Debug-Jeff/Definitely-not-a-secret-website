import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, Menu } from 'lucide-react'


// You can replace these with actual images from your project
const DEEP_WEB_IMAGE = "/deep-web.jpg"
const JOKER_IMAGE = "/deep-web.jpg"
const JINX_IMAGE = "/deep-web.jpg"

const themes = {
  dark: {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    accent: 'bg-purple-600',
  },
  light: {
    background: 'bg-gray-100',
    text: 'text-gray-900',
    accent: 'bg-blue-600',
  },
}

export default function CyberNexus() {
  const [theme, setTheme] = useState('dark')
  const [showLanding, setShowLanding] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [stories, setStories] = useState([
    { title: 'The Quantum Hack', content: 'In a world where quantum computing...' },
    { title: 'Neural Network Nightmare', content: 'As AI systems became more advanced...' },
  ])

  useEffect(() => {
    const timer = setTimeout(() => setShowLanding(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const addStory = () => {
    setStories([...stories, { title: 'New Story', content: 'Start typing your story here...' }])
  }

  const updateStory = (index, field, value) => {
    const newStories = [...stories]
    newStories[index][field] = value
    setStories(newStories)
  }

  return (
    <div className={`min-h-screen ${themes[theme].background} ${themes[theme].text} transition-colors duration-300`}>
      {showLanding ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <img src={DEEP_WEB_IMAGE} alt="Deep Web" className="w-full h-full object-cover opacity-50" />
          <h1 className="absolute text-4xl font-bold text-green-400">Welcome to CyberNexus</h1>
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className={`fixed w-full z-10 ${themes[theme].background} shadow-md`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
              <h1 className="text-2xl font-bold">CyberNexus</h1>
              <div className="hidden md:flex space-x-4">
                <a href="#about" className="hover:text-purple-400">About</a>
                <a href="#stories" className="hover:text-purple-400">Stories</a>
                <a href="#contact" className="hover:text-purple-400">Contact</a>
              </div>
              <div className="flex items-center space-x-4">
                <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {menuOpen && (
              <div className="md:hidden">
                <a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a>
                <a href="#stories" className="block py-2 px-4 hover:bg-gray-700">Stories</a>
                <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
              </div>
            )}
          </nav>

          {/* Main Content */}
          <main className="container mx-auto px-6 pt-20">
            {/* About Section */}
            <section id="about" className="py-12">
              <h2 className="text-3xl font-bold mb-6">About CyberNexus</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={JOKER_IMAGE} alt="Cyber Character" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div>
                  <p className="mb-4">
                    Welcome to CyberNexus, where the digital and physical worlds collide. We explore the depths of technology,
                    unraveling mysteries and showcasing the cutting edge of cyber innovation.
                  </p>
                  <p>
                    Our mission is to enlighten, entertain, and sometimes unsettle. Dive into our world of tech noir and
                    discover stories that blur the lines between reality and science fiction.
                  </p>
                </div>
              </div>
            </section>

            {/* Stories Section */}
            <section id="stories" className="py-12">
              <h2 className="text-3xl font-bold mb-6">Cyber Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {stories.map((story, index) => (
                  <div key={index} className={`p-6 rounded-lg shadow-md ${themes[theme].background === 'bg-gray-900' ? 'bg-gray-800' : 'bg-white'}`}>
                    <Input
                      value={story.title}
                      onChange={(e) => updateStory(index, 'title', e.target.value)}
                      className="mb-2 font-bold text-lg"
                    />
                    <Textarea
                      value={story.content}
                      onChange={(e) => updateStory(index, 'content', e.target.value)}
                      className="w-full h-32"
                    />
                  </div>
                ))}
              </div>
              <Button onClick={addStory} className={`mt-4 ${themes[theme].accent} text-white`}>
                Add New Story
              </Button>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form className="max-w-md mx-auto">
                <Input type="text" placeholder="Your Name" className="mb-4" />
                <Input type="email" placeholder="Your Email" className="mb-4" />
                <Textarea placeholder="Your Message" className="mb-4" />
                <Button type="submit" className={`${themes[theme].accent} text-white`}>
                  Send Message
                </Button>
              </form>
            </section>
          </main>

          {/* Footer */}
          <footer className={`mt-12 py-6 ${themes[theme].background === 'bg-gray-900' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <div className="container mx-auto px-6 text-center">
              <p>&copy; 2023 CyberNexus. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

//TUTORIALS TO
//ANY CHANGES I MAY NEED
// 5. Update the content:

// 1. Scroll through the component and look for text content
// 2. Replace the placeholder text with your own content
// 3. For example, in the About section:





// ```typescriptreact
// <section id="about" className="py-12">
//   <h2 className="text-3xl font-bold mb-6">About CyberNexus</h2>
//   <div className="flex flex-col md:flex-row items-center gap-8">
//     <img src={JOKER_IMAGE} alt="Cyber Character" className="w-full md:w-1/2 rounded-lg shadow-lg" />
//     <div>
//       <p className="mb-4">
//         Welcome to CyberNexus, your gateway to the digital underground. We explore the shadowy corners of technology,
//         uncovering secrets and showcasing the cutting edge of cyber innovation.
//       </p>
//       <p>
//         Our mission is to illuminate the dark web, entertain with tales of digital intrigue, and challenge your perception
//         of online reality. Dive into our world of tech noir and discover stories that will make you question everything you
//         thought you knew about the internet.
//       </p>
//     </div>
//   </div>
// </section>
// ```

// 6. Adjust the layout:

// 1. Modify the CSS classes to change the layout
// 2. For example, to change the Stories section from a 2-column to a 3-column layout:





// ```typescriptreact
// <div className="grid md:grid-cols-3 gap-6">
//   {/* ... story items ... */}
// </div>
// ```

// 7. Add or remove sections:

// 1. To add a new section, copy an existing section and modify its content
// 2. To remove a section, delete the entire `<section>` block



// 8. Customize the navigation:

// 1. Find the navigation section and update the links and labels:





// ```typescriptreact
// <div className="hidden md:flex space-x-4">
//   <a href="#about" className="hover:text-purple-400">About</a>
//   <a href="#stories" className="hover:text-purple-400">Stories</a>
//   <a href="#contact" className="hover:text-purple-400">Contact</a>
//   <a href="#gallery" className="hover:text-purple-400">Gallery</a>
// </div>
// ```

// 9. Modify the theme toggle:

// 1. If you want to change how the theme toggle works, find the `toggleTheme` function:





// ```typescriptreact
// const toggleTheme = () => {
//   setTheme(theme === 'dark' ? 'light' : 'dark')
//   // You could add additional logic here, like saving the preference to localStorage
// }
// ```

// 10. Update the stories functionality:

// 1. Find the `stories` state and the `addStory` and `updateStory` functions
// 2. Modify these to change how stories are managed, for example:





// ```typescriptreact
// const [stories, setStories] = useState([
//   { title: 'The Quantum Hack', content: 'In a world where quantum computing...', author: 'CyberPunk42' },
//   { title: 'Neural Network Nightmare', content: 'As AI systems became more advanced...', author: 'NeoMatrix' },
// ])

// const addStory = () => {
//   setStories([...stories, { title: 'New Story', content: 'Start typing your story here...', author: 'Anonymous' }])
// }

// const updateStory = (index, field, value) => {
//   const newStories = [...stories]
//   newStories[index][field] = value
//   setStories(newStories)
//   // You could add logic here to save stories to a backend
// }
// ```

// 11. Enhance the contact form:

// 1. Add form validation and submission logic:





// ```typescriptreact
// const [formData, setFormData] = useState({ name: '', email: '', message: '' })
// const [formError, setFormError] = useState('')

// const handleSubmit = (e) => {
//   e.preventDefault()
//   if (!formData.name || !formData.email || !formData.message) {
//     setFormError('Please fill in all fields')
//     return
//   }
//   // Add logic here to submit the form data to your backend
//   console.log('Form submitted:', formData)
//   setFormData({ name: '', email: '', message: '' })
//   setFormError('')
// }

// // In the JSX:
// <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//   <Input 
//     type="text" 
//     placeholder="Your Name" 
//     className="mb-4" 
//     value={formData.name}
//     onChange={(e) => setFormData({...formData, name: e.target.value})}
//   />
//   {/* Similar changes for email and message inputs */}
//   {formError && <p className="text-red-500 mb-4">{formError}</p>}
//   <Button type="submit" className={`${themes[theme].accent} text-white`}>
//     Send Message
//   </Button>
// </form>
// ```

// Remember to save your changes frequently and test your website to ensure everything works as expected. If you're using a development server, it should automatically reload with your changes.

// If you need to add new dependencies or modify the project structure significantly, you may need to update your `package.json` file and run `npm install` or `yarn install` to ensure all necessary packages are installed.

// Is there any specific part of the website you'd like to focus on or modify further?