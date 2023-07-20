import Link from 'next/link';
function article() {
  return (
    <div>
      <h1>Aritcle</h1>
      <Link href="/posts">
        <button>Take me to the post page </button>
      </Link> 
    </div>
  )
}

export default article