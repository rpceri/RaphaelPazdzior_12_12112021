/**
 * Component for left navigation
 *
 * @component
 * @return { HTMLElement }
*/
function LeftMenu() {
    return <aside className="Leftmenu">
        <div className="Leftmenu__button-list">
            <button>
                <img src={`${process.env.PUBLIC_URL}/pictures/zen.png`} alt="Relaxing" />
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/pictures/swim.png`} alt="Swiming" />
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/pictures/bike.png`} alt="Biking" />
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/pictures/weight.png`} alt="Weight" />
            </button>
        </div>
        <div className="copyright">
            <p>Copyright SportSee {new Date().getFullYear()}</p>
        </div>
    </aside>;
}
    
export default LeftMenu