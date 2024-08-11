import './styles.css'
import iconVideoCam from '../../../assets/icons/icon-video-cam.svg'
import iconPhotoCam from '../../../assets/icons/icon-photo-cam.svg'

export function WritePostBox  () {
    return (
        <div className={'post-box'}>

            <div className={"box-top"}>

                <input type="text" className="custom-input" placeholder="به چه چیزی فکر میکنید؟"/>


                <div className={"avatar"}>
                    <img src={"https://wallpapershome.com/images/pages/pic_v/26296.jpg"}/>
                </div>


            </div>
            <div className={"box-bottom"}>

                <img src={iconVideoCam}/>
                <img src={iconPhotoCam}/>

            </div>


        </div>
    );
}