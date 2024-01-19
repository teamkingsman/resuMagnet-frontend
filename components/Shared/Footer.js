'use client'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#FFFFFF] text-base-content border-t-4 border-double border-highlight_color">
            <nav>
                <header className="footer-title text-highlight_color ">Services</header>
                <a className="link link-hover text-main">CV Making</a>
                <a className="link link-hover text-main">Resume Making</a>
                <a className="link link-hover text-main">Cover Letter Builder</a>
                <a className="link link-hover text-main">Jod Search</a>
            </nav>
            <nav>
                <header className="footer-title text-highlight_color">Company</header>
                <a className="link link-hover text-main">About us</a>
                <a className="link link-hover text-main">Contact</a>
                <a className="link link-hover text-main">Jobs</a>
                <a className="link link-hover text-main">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-highlight_color">Legal</header>
                <a className="link link-hover text-main">Terms of use</a>
                <a className="link link-hover text-main">Privacy policy</a>
                <a className="link link-hover text-main">Cookie policy</a>
            </nav>
            <form>
                <header className="footer-title text-highlight_color">Newsletter</header>
                <fieldset className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-main">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered bg-[#FFFFFF] border-2 border-main join-item  w-full" />
                        <button className="btn bg-main text-[#FFFFFF] join-item hover:text-highlight_color">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;