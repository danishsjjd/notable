"use client"

import NavigationBar from "./_components/navigation-bar"
import NotesNavigation from "./_components/notes-navigation"

const Dashboard = () => {
  return (
    <div className="flex h-svh max-h-svh min-h-svh">
      <NavigationBar />
      <NotesNavigation />

      <div className="grow">My Notable!</div>
    </div>
  )
}

export default Dashboard
