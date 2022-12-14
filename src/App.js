/* eslint-disalbe */
// Lint 끄는 기능

// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const post = "강남 테헤란로";
  const [arr, setArr] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  const [sub] = useState(["1월 2일", "2월 15일", "3월 30일", "5월 30일"]);
  const [good, setGood] = useState([0, 0, 0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [value, setValue] = useState("");

  // const func = () => {
  //   setGood(good + 1);
  // };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "green", fontSize: "18px" }}>ReactBlog</h4>
      </div>
      <h4>{post}</h4>
      <button
        onClick={() => {
          let copy = [...arr];
          copy[0] = "여자코트 추천";
          setArr(copy);
        }}
      >
        제목변경
      </button>
      <button
        onClick={() => {
          let copy = [...arr];
          copy.sort();
          setArr(copy);
        }}
      >
        가나다순
      </button>
      {/* <div className="list">
        <h4>
          {arr[0]}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{arr[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            modal === true ? setModal(false) : setModal(true);
          }}
        >
          {arr[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {arr.map((a, i) => {
        return (
          <div
            className="list"
            key={i}
            onClick={() => {
              modal === true ? setModal(false) : setModal(true);
              setTitle(i);
            }}
          >
            <h4>
              {arr[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                }}
              >
                👍 {good[i]}
              </span>
            </h4>
            <p>{sub[i]}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const copy = [...arr];
                copy.splice(i, 1);
                setArr(copy);
                i--;
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          const value = e.target.value;
          setValue(value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...arr];
          copy.unshift(value);
          setArr(copy);
        }}
      >
        글 발행
      </button>
      {modal === true ? <Modal color={"skyblue"} sub={sub} title={title} arr={arr} setArr={setArr} /> : null}
      <Modal2 />
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.arr[props.title]}</h4>
      <p>날짜 {props.sub[props.title]}</p>
      <p>내용</p>
      <button
        onClick={() => {
          let copy = [...props.arr];
          copy[3] = "여자코트 추천";
          props.setArr(copy);
        }}
      >
        글 수정
      </button>
    </div>
  );
};

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕하세요 !{this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 50 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
