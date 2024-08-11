import iconMoreVert from "../../../assets/icons/icon-more-vert.svg";
import './styles.css';
export  function CommentCard ({data} : {data : string}){
    return (
        <div className="comment-section">
        <hr className="divider"/>
        <div className="comment-content">
            <img src={iconMoreVert} alt="More options" className="comment-more-options"/>

            <div className="comment-info">
                <div className="comment-text">
                    <p className="commenter-name"><strong>کاربر ناشناس</strong></p>
                    <p className="comment-description">{data}</p>
                </div>
            </div>

            <div className="comment-avatar">
                <img src="https://wallpapershome.com/images/pages/pic_h/25408.jpg" alt="Commenter Avatar"/>
            </div>

        </div>
    </div>);
}