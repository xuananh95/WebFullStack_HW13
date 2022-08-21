import "./App.css";
import data from "./data.json";
import User from "./components/User/index";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = { data: data };
    }
    handleDelete = () => {
        this.setState({ data: [] });
    };
    handleImport = () => {
        this.setState({ data });
    };
    render() {
        return (
            <div className="App">
                <h1>Danh sách lớp học</h1>
                <button className="btn btn-delete" onClick={this.handleDelete}>
                    Xóa
                </button>
                <button className="btn btn-add" onClick={this.handleImport}>
                    Nhập data
                </button>
                <div className="user-container">
                    {this.state.data.length === 0 ? (
                        <h2>Danh sách lớp trống</h2>
                    ) : (
                        this.state.data.map((item, idx) => (
                            <User
                                key={idx}
                                name={item.name}
                                age={item.age}
                                avatar={item.avatar}
                                country={item.country}
                            />
                        ))
                    )}
                </div>
            </div>
        );
    }
}

export default App;
