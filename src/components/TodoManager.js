import {connect} from 'react-redux'

function TodoManager({clear}) {
    return (
        <div>
            <div>
                <input id="checkbox-completed" type="checkbox" />
                <label htmlFor="checkbox-completed">Completed</label>
            </div>
            <div>
                <input id="checkbox-pending" type="checkbox" />
                <label htmlFor="checkbox-pending">Pending</label>
            </div>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        clear: () => dispatch({
            type: 'todos/clear',
        })
    }
}

export default connect(null, mapDispatchToProps)(TodoManager)
