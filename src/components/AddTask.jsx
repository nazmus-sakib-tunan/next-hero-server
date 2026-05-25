"use client";

import {CirclePlus} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField, ListBox, Select} from "@heroui/react";

export function AddTask({createATask}) {
  return (
    <Modal>
      <Button variant="secondary">Add Task</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading> Add Task</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createATask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text" variant="secondary">
                    <Label>Title</Label>
                    <Input placeholder="Enter your task title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text" variant="secondary">
                    <Label>task description</Label>
                    <Input placeholder="Enter your task description" />
                  </TextField>
                <Select name="priority" className="w-[256px]" placeholder="Select one">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="low" textValue="low">
            low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="medium" textValue="medium">
            medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="high" textValue="high">
            high
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
                  </Select>
                  
                  <Select name="status" className="w-[256px]" placeholder="Select one">
      <Label>Status</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="pending" textValue="Pending">
            Pending
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="progress" textValue="Progress">
            In Progress
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="completed" textValue="Completed">
            Completed
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
                  
                  <TextField className="w-full" name="assignTo" variant="secondary">
                    <Label>Assign to</Label>
                    <Input placeholder="Enter the person's name" />
                  </TextField>

                <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
                    <Button type="submit">
                      Submit Task
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}