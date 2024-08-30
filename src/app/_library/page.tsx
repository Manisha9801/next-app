//Prefixing a folder name with underscore will make the folder private, even the page.tsx within that will not be routable.

export default function PrivateLibrary() {
  return (
    <h1>PrivateLibrary</h1>
  )
}