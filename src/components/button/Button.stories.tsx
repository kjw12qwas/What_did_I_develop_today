import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "danger"],
      description: "버튼의 스타일 변형",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "버튼의 크기",
    },
    disabled: {
      control: { type: "boolean" },
      description: "버튼 비활성화 여부",
    },
    loading: {
      control: { type: "boolean" },
      description: "로딩 상태 여부",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "전체 너비 사용 여부",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Primary 버튼
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

// Secondary 버튼
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

// Outline 버튼
export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

// Ghost 버튼
export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "md",
  },
};

// Danger 버튼
export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "md",
  },
};

// 크기별 버튼들
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// 모든 variant를 한번에 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

// 비활성화된 버튼들
export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary" disabled>
        Primary Disabled
      </Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
      <Button variant="ghost" disabled>
        Ghost Disabled
      </Button>
      <Button variant="danger" disabled>
        Danger Disabled
      </Button>
    </div>
  ),
};

// 로딩 상태 버튼들
export const Loading: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary" loading>
        Loading
      </Button>
      <Button variant="secondary" loading>
        Loading
      </Button>
      <Button variant="outline" loading>
        Loading
      </Button>
      <Button variant="ghost" loading>
        Loading
      </Button>
      <Button variant="danger" loading>
        Loading
      </Button>
    </div>
  ),
};

// 전체 너비 버튼
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Button variant="primary" fullWidth style={{ marginBottom: "16px" }}>
        Full Width Button
      </Button>
      <Button variant="outline" fullWidth>
        Another Full Width Button
      </Button>
    </div>
  ),
};

// 아이콘이 있는 버튼 (예시)
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Button variant="primary">
        <span style={{ marginRight: "8px" }}>→</span>
        Next
      </Button>
      <Button variant="secondary">
        <span style={{ marginRight: "8px" }}>←</span>
        Back
      </Button>
      <Button variant="outline">
        <span style={{ marginRight: "8px" }}>📁</span>
        Open Folder
      </Button>
      <Button variant="danger">
        <span style={{ marginRight: "8px" }}>🗑️</span>
        Delete
      </Button>
    </div>
  ),
};

// 인터랙티브 예시
export const Interactive: Story = {
  args: {
    children: "Click me!",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "이 버튼을 클릭하면 Actions 탭에서 이벤트를 확인할 수 있습니다.",
      },
    },
  },
};
