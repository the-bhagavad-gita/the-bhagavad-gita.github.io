import React from 'react'
import { Route, Link } from "react-router-dom";
import CardImg from "../../../img/card-img.jpg";
import { useSpeechSynthesis } from "react-speech-kit";
import ReactTooltip from "react-tooltip";

const CharacterItem = ({ item }) => {
    console.log(item);
    const [value, setValue] = React.useState("");
    const { speak, cancel } = useSpeechSynthesis();
    const [play, setPlay] = React.useState(true);
    const handleChange = () => {
        play ? speak({ text: item.meaning }) : cancel();
        setPlay(play => !play);
    };
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card card-figure has-hoverable">
                <figure className="figure">
                    <div className="figure-img">
                        <div style={{ height: '10vw' }}>
                            <h6 className="figure-title"> {item.name} </h6>
                            <p className="text-muted mb-0">
                                <small> {item.description}
                                </small> <br /><br />
                                <small> <b> Meaning </b> - <br /> {item.meaning}
                                </small>
                            </p>
                        </div>
                        <div className="figure-action">
                            <Link to={`/cardview/` + item.id} className="btn btn-block btn-sm btn-primary" >Details</Link>
                        </div>
                    </div>
                    <figcaption className="figure-caption">
                        <ul className="list-inline d-flex text-muted mb-0">

                            <li className="list-inline-item text-truncate mr-auto">
                                <a href={CardImg} download> <span className="badge badge-info">{item.code}</span></a>
                            </li>
                            {/* <li className="list-inline-item ">
                                <a href="#"> <span><i
                                    className="fa fa-star "></i></span></a>
                            </li>
                            <li className="list-inline-item">

                                <a href={`mailto:?subject=Bookmark Dashboard: sharing '${item.name}'&body=Hello,%0D%0A%0D%0AI would like to share this url with you:
                                        ${window.location.protocol + "//" + window.location.host + "/cardview/" + item.id} 
                                        ${item.expireDate ? "which will be expire before" + item.expireDate : ""} %0D%0A%0D%0A Regards,`} className="fa fa-share-alt" >&nbsp;</a>
                            </li> */}
                            <li className="list-inline-item">
                                <a href="#" data-tip="Copy to clipboard" onClick={() => { navigator.clipboard.writeText(item.name + '\n' + item.description + '\nMeaning - \n' + item.meaning) }}>
                                    <span><i className="fa fa-clipboard "></i></span>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a href="#" data-tip={play ? "Play" : "Stop"} onClick={() => handleChange()}>
                                    <span><i
                                        className={play ? "fa fa-play" : "fa fa-stop-circle-o"}></i></span>
                                </a>
                            </li>
                        </ul>
                    </figcaption>
                </figure>
            </div>

            <ReactTooltip theme="dark" position="right" />
        </div >
    )
}

export default CharacterItem
