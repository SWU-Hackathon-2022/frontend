import classes from "../assets/css/UploadMusic.module.css";
import { useState } from "react";

const UploadMusic = () => {
  const [uploadMusicData, setUploadMusicData] = useState({
    musicName: "",
    introduction: "",
    hashTag: "",
    genre: "",
    musicThumbnail: "",
    musicFile: "",
  });

  return (
    <div>
      <form>
        <div>
          <label htmlFor="musicName">음악이름</label>
          <input
            onChange={(e) =>
              setUploadMusicData({
                ...uploadMusicData,
                musicName: e.target.value,
              })
            }
            type="text"
            name="musicName"
            id="musicName"
          ></input>
        </div>
        <div>
          <label htmlFor="introduce">음악소개</label>
          <textarea
            onChange={(e) =>
              setUploadMusicData({
                ...uploadMusicData,
                introduction: e.target.value,
              })
            }
            type="text"
            name="introduce"
            id="introduce"
            style={{
              height: "100px",
              resize: "none",
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="hashTag">해시태그</label>
          <input
            // onChange={e => }
            type="text"
            name="hashTag"
            id="hadhTag"
          ></input>
        </div>

        <div>
          <label>장르</label>
          <select defaultValue={""}>
            <option value="HIP_HOP">힙합</option>
            <option value="POP">POP</option>
            <option value="ROCK">락</option>
            <option value="JAZZ">재즈</option>
            <option value="BALLAD">발라드</option>
            <option value="DANCE">댄스</option>
            <option value="DISCO">디스코</option>
            <option value="R_B">R&B</option>
            <option value="INDIE">인디</option>
          </select>
        </div>

        <div>
          <label>음악 썸네일</label>
        </div>

        <div>
          <label>음악 파일 업로드</label>
        </div>
      </form>
    </div>
  );
};

export default UploadMusic;
