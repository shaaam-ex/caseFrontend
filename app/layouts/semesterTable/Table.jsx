import './table.css';

const Table = (props) => {
    return (
        <>
            <div className="main-container-semester-individual-table">
                <h2>{props.semester.name}</h2>

                <div className="inner-headings-main-container-semester-table">
                    <h3 className='h3-code-column-inner-heading-main-semester-table'>Code</h3>
                    <h3 className='h3-title-column-inner-heading-main-semester-table'>Title</h3>
                    <h3 className='h3-credits-column-inner-heading-main-semester-table'>Credits</h3>
                    {/* <h3 className='h3-pre-req-column-inner-heading-main-semester-table'>Pre-Requisite</h3> */}
                </div>

                <div className="individual-subject-row-table">
                    {
                        props.semester.subjects.map(subject => (
                            <div className="main-row-subject-table" key={subject.code}>
                                <p className='p-code-column-inner-heading-main-semester-table'>{subject.code}</p>
                                <p className='p-title-column-inner-heading-main-semester-table'>{subject.name}</p>
                                <p className='p-credits-column-inner-heading-main-semester-table'>{subject.credits[0]} + {subject.credits[1]}</p>
                                {/* <p className='p-pre-req-column-inner-heading-main-semester-table'>{subject.preRequisite}</p> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Table