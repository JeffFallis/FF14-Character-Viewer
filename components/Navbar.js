import Link from 'next/link';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link href="/"><a class="navbar-brand">FF14 FC Viewer</a></Link>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link href="/"><a class="nav-link">Home</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/about"><a class="nav-link">About</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;