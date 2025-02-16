import NavigationBar from "./_components/navigation-bar"
import Note from "./_components/note"
import NotesNavigation from "./_components/notes-navigation"

const Dashboard = () => {
  return (
    <div className="body-overflow-y-hidden flex h-svh max-h-svh min-h-svh min-w-[1250px]">
      <NavigationBar />
      <NotesNavigation />
      <Note />
    </div>
  )
}

export default Dashboard
