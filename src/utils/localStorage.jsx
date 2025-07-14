
    const employees = [
  
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        title: "Fix Login Bug",
        description: "Resolve login issue on mobile devices.",
        date: "2025-06-18",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from UI team.",
        date: "2025-06-17",
        category: "code review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Documentation",
        description: "Add missing steps to API docs.",
        date: "2025-06-15",
        category: "documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Client Demo",
        description: "Prepare and deliver demo to XYZ Corp.",
        date: "2025-06-19",
        category: "client",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Design Update",
        description: "Redesign onboarding screen for better UX.",
        date: "2025-06-16",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backup Files",
        description: "Backup project files to shared drive.",
        date: "2025-06-14",
        category: "maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Team Standup",
        description: "Daily sync-up with frontend team.",
        date: "2025-06-18",
        category: "meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve database performance.",
        date: "2025-06-16",
        category: "database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server Logs Cleanup",
        description: "Delete old server logs safely.",
        date: "2025-06-13",
        category: "devops",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Security Patch",
        description: "Install latest OS updates on servers.",
        date: "2025-06-17",
        category: "security",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write Test Cases",
        description: "Add unit tests for cart functionality.",
        date: "2025-06-18",
        category: "testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Code",
        description: "Clean up legacy components.",
        date: "2025-06-15",
        category: "refactoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "User Feedback Analysis",
        description: "Analyze feedback from latest release.",
        date: "2025-06-16",
        category: "analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Vivaan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Sprint Planning",
        description: "Plan tasks for next development sprint.",
        date: "2025-06-18",
        category: "planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Customer Email Reply",
        description: "Respond to support ticket #45321.",
        date: "2025-06-15",
        category: "support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Error Log Fix",
        description: "Fix repeated errors from API service.",
        date: "2025-06-14",
        category: "debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "File Organization",
        description: "Reorganize shared files for project X.",
        date: "2025-06-17",
        category: "organization",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];
export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = () => {
  const employees =JSON.parse(localStorage.getItem('employees'))
  const admin =JSON.parse(localStorage.getItem('admin'))

  return { employees, admin}
}

