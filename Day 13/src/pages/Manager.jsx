import React from 'react';
import { Link } from 'react-router-dom';

const Manager = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <header className="w-full flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Welcome, User!</h1>
        <p className="text-lg text-foreground text-center">
          As a Project Manager, you play a crucial role in overseeing projects, assigning tasks, and ensuring team productivity.
        </p>
      </header>

      <section className="w-full max-w-4xl mb-8">
        <div className="bg-primary shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold text-background mb-4">Manage Your Projects</h2>
          <p className="text-foreground mb-4">
            Create and manage projects to streamline your team's workflow. Assign tasks to team members, set deadlines, and track progress to ensure successful project completion.
          </p>
          <Link to="/manager/projects">
            <button className="bg-foreground text-primary rounded px-4 py-2 hover:bg-primary hover:text-foreground hover:border border-foreground">
              Go to Projects
            </button>
          </Link>
        </div>

        <div className="bg-primary shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold text-background mb-4">Assign Tasks Effectively</h2>
          <p className="text-foreground mb-4">
            Assign tasks to team members based on their skills and availability. Monitor task progress, make adjustments as needed, and ensure that all tasks are completed on time.
          </p>
          <Link to="/manager/tasks">
          <button className="bg-foreground text-primary rounded px-4 py-2 hover:bg-primary hover:text-foreground hover:border border-foreground">
              Go to Tasks
            </button>
          </Link>
        </div>
      </section>

      <section className="w-full max-w-4xl">
        <div className="bg-primary shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold text-background mb-4">Your Role as a Project Manager</h2>
          <p className="text-foreground">
            As a Project Manager, you are responsible for planning, executing, and closing projects. This includes defining project scopes, setting timelines, and managing resources. Your leadership ensures that projects meet their objectives and are completed within the set constraints.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Manager;
