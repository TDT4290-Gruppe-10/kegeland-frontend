function sidepanel(menyItems: string[], valgt: string) {
    console.log(menyItems, valgt)
    return (
        <div className="sidepanel">
            <div style={{ height: "100px" }}></div>
            {menyItems.map((element) => (
                <div className="sidepanelElement" >
                    {element === valgt ? (
                        <>
                            <div className="bluebox"></div>
                            <div className="sidepanelText">
                                {element}
                            </div>
                        </>
                    ) : (
                        <div className="sidepanelText">
                            {element}
                        </div>
                    )}
                </div>
            ))
            }
        </div >
    );
}

export default sidepanel;