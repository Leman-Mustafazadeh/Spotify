import React, { useState } from "react";
import { Form, Input, Upload } from "antd";
const { TextArea } = Input;
import InputFileUpload from "../../../components/Upload";
import { useDispatch, useSelector } from "react-redux";
import "./addsong.css";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddSong = ({ playFind }) => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [upload, setUpload] = useState({});
  const [upload2, setUpload2] = useState("");
  const { playList } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <div className="addsong">
      <Form onSubmitCapture={normFile}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            padding: "20px 0 0 20px",
          }}
        >
          <InputFileUpload setUpload={setUpload} />

          <div className="formCom_title">
            <Form.Item
              style={{ color: "white", margin: "10px 0" }}
              label="Name"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  color: "white",
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item label="Description">
              <TextArea
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
                rows={4}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <button className="save">Save</button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default () => <AddSong />;
