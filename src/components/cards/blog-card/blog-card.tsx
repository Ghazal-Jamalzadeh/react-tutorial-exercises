import './styles.css';
import iconMoreVert from '../../../assets/icons/icon-more-vert.svg';
import iconComment from '../../../assets/icons/icon-comment.svg';
import iconLike from '../../../assets/icons/icon-like.svg';
import iconLikeFilled from '../../../assets/icons/icon-like-filled.svg';
import {CommentCard} from "../comment-card/commnet-card.tsx";
import {useState} from "react";
import {PostModel} from "../../../models/post-model-form.tsx";

function BlogCard({data}:{data : PostModel}) {

    const [isLiked , setIsLiked] = useState(false);

    const changeLikeStatus = ()=>{
        setIsLiked(!isLiked)
    }
    return (
        <>
            <div className="blog-card">
                <div className="card-header">
                    <img src={iconMoreVert} alt="More options"/>
                    <div className="user-info">
                        <p className="username">{data.title}</p>
                        <p className="post-info"> <i className="fas fa-calendar-alt"></i> 1 اردیبهشت 1403</p>
                    </div>
                    <div className="avatar">
                        <img src="https://wallpapershome.com/images/pages/pic_h/25408.jpg" alt="User Avatar"/>
                    </div>
                </div>
                <div className="card-image">
                    <img src={data.poster} alt="Blog Post Image"/>
                </div>
                <div className="card-footer">
                    <p className="small-text">{data.country}</p>
                    <div className="footer-row">
                        <p className="footer-text">{data.genres?.length ?? 0}</p>
                        <img src={iconComment} alt="Comment"/>
                        <p className="footer-text">25 لایک</p>
                        <img src={isLiked ?  iconLikeFilled : iconLike} alt="Like" onClick={changeLikeStatus}/>
                    </div>
                </div>
                {
                    data.genres?.map((value, index) =>  <CommentCard data={value} key={index}/>)
                }
            </div>
        </>

    );
}

export default BlogCard;
