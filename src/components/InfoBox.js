const InfoBox = ({ icon, title, text }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <div>
                    {icon}
                </div>

                <div className="flex flex-col">
                    <div className="font-medium text-sm">{title}</div>
                    <div className="font-[600] text-sm">{text}</div>
                </div>
            </div>
        </>
    )
}

export default InfoBox