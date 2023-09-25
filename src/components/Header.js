export const title = (
    <h1 id="title">Logo</h1>
)


export const Header= () => {
    return (
        <div className="header">
            {title}
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Card</li>
            </ul>
        </div>
    )
};
export default Header;