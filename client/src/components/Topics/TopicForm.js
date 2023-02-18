import { useState, useEffect } from "react";
import LanguagesList from "../Languages/LanguagesList.js";
import { Space, Button, TextInput, Textarea, Input, Code } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import "./Topics.module.css";
const TopicForm = () => {
  const [submittedValues, setSubmittedValues] = useState("");
  // I have to set the error message here, because Mantine ui dosen't handle it for select inputs
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [submittedValues]);
  const form = useForm({
    initialValues: {
      topicName: "",
      textArea: "",
      languages: "",
      favorable: "",
      public: "",
      type: "",
      date: "",
    },
    validate: {
      topicName: (value) =>
        value.length < 3 ? "Topic name is too short" : null,
      textArea: (value) => (value.length < 10 ? "Provide more detail" : null),
      languages: (value) =>
        value.length < 1 ? setErrorMessage(" a language") : null,
      favorable: (value) => {
        setErrorMessage((prevErrorMessage) =>
          value.length < 1 ? prevErrorMessage + " ,favorable status" : ""
        );
      },
      public: (value) => {
        setErrorMessage((prevErrorMessage) =>
          value.length < 1 ? prevErrorMessage + " ,public status" : ""
        );
      },
      type: (value) => {
        setErrorMessage((prevErrorMessage) =>
          value.length < 1 ? prevErrorMessage + " ,type status" : ""
        );
      },
      date: (value) => (value.length < 1 ? "Select a date" : null),
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) =>
        setSubmittedValues(JSON.stringify(values, null, 2))
      )}
    >
      <table>
        <tbody>
          <tr>
            <td>Topic Name</td>
            <td>
              <TextInput
                placeholder="Topic name"
                value={form.values.topicName}
                /*onChange={(event) =>
                  form.setFieldValue("topicName", event.currentTarget.value)
                }*/
                {...form.getInputProps("topicName")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Detail</td>
            <td>
              <Textarea
                placeholder="pls explain the context here"
                autosize
                minRows={2}
                maxRows={5}
                {...form.getInputProps("textArea")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>
              <Input component="select" {...form.getInputProps("languages")}>
                <option value="">-</option>
                <LanguagesList />
              </Input>
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Favorable</td>
            <td>
              <Input component="select" {...form.getInputProps("favorable")}>
                <option value="">-</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Input>
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Public</td>
            <td>
              <Input component="select" {...form.getInputProps("public")}>
                <option value="">-</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Input>
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Type</td>
            <td>
              <Input component="select" {...form.getInputProps("type")}>
                <option value="">-</option>
                <option value="ruled">ruled</option>
                <option value="free">free</option>
              </Input>
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Video</td>
            <td>
              <Input component="select" {...form.getInputProps("video")}>
                <option value="">-</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Input>
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td>Date</td>
            <td>
              <DatePicker
                placeholder="Pick date"
                {...form.getInputProps("date")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Space h="sm" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button
                type="submit"
                radius="md"
                size="md"
                compact
                variant="light"
              >
                Create
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      {errorMessage && (
        <p style={{ color: "red" }} className="error-message">
          {"Don't forget to select " + errorMessage}
        </p>
      )}

      {submittedValues && <Code block>{submittedValues}</Code>}
    </form>
  );
};
export default TopicForm;
