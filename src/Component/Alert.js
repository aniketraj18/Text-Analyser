import React from 'react'

function Alert(props) {
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Welcome! To Text-Analyser </strong>{props.alert}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      
    </div>
  )
}

export default Alert
