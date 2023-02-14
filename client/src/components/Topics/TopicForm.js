import { useState } from "react";
import LanguagesList from "../Languages/LanguagesList.js";
import { Space, Button, TextInput, Textarea, Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
const TopicForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18,
    },
  });
  const [submittedValues, setSubmittedValues] = useState("");
  return (
    <>
      <form
        onSubmit={form.onSubmit((values) =>
          setSubmittedValues(JSON.stringify(values, null, 2))
        )}
      >
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <label>Topic Name</label>
            </td>
            <td>
              <TextInput
                placeholder="Topic name"
                {...form.getInputProps("firstName")}
              />
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td>Detail</td>
            <td>
              <Textarea
                placeholder="pls explain the context here"
                autosize
                minRows={2}
                maxRows={5}
              />
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td>Languages</td>
            <td>
              <Input component="select">
                <LanguagesList />
              </Input>
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td>For or against</td>
            <Input component="select">
              <option value="for">For</option>
              <option value="against">Against</option>
            </Input>
          </tr>
          <Space h="sm" />
          <tr>
            <td>Public</td>
            <td>
              <Input component="select">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Input>
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td>Type</td>
            <td>
              <Input component="select">
                <option value="ruled">ruled</option>
                <option value="free">free</option>
              </Input>
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td>Video</td>
            <td>
              <Input component="select">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Input>
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td>Date</td>
            <td>
              <DatePicker placeholder="Pick date" withAsterisk />
            </td>
          </tr>
          <Space h="sm" />
          <tr>
            <td></td>
            <td>
              <Button
                //onClick={() => setOpened(false)}
                radius="md"
                size="md"
                compact
                variant="light"
              >
                Create
              </Button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default TopicForm;
