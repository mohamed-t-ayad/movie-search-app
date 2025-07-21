export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-4 mt-12 border-t text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Movie Search App. Built with Next.js & OMDb API.</p>
      </footer>
    );
  }
  