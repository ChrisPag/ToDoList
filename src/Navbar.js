import AddTask from './AddTask';

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>To-Do List</h1>
            <AddTask />
        </div>
    );

}

export default Navbar;