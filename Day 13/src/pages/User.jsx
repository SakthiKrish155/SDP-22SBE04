import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you're using your Button component

const User = () => {
  return (
    <div className="min-h-screen bg-primary/5">     
      <section className="bg-primary/80 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'IM Fell English, serif' }}>Optimize Your Workflow</h1>
          <p className="text-3xl mt-4" style={{fontFamily: 'IM Fell English, serif' }}>Efficient task and time management for professionals.</p>
          <div className="mt-6">
            <Button className="bg-transparent border border-white text-white mr-4">Get Started</Button>
            <Button className="bg-transparent border border-white text-white">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily:"'IM English'"}}>Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Easy Task Tracking', description: 'View all your tasks in one place with clear deadlines and priorities.' },
              { title: 'Time Management Tools', description: 'Utilize built-in tools to allocate your time efficiently and meet your deadlines.' },
              { title: 'Collaboration', description: 'Communicate with your team members and stay updated on project progress.' },
              { title: 'Progress Reports', description: 'Track your progress and see how you\'re improving over time.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-background p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'IM Fell English, serif' }}>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'IM Fell English, serif' }}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 'Step 1', description: 'Get Assigned Tasks - Receive tasks from your project manager directly to your dashboard.' },
              { step: 'Step 2', description: 'Organize and Prioritize - Sort tasks by priority, due date, or project.' },
              { step: 'Step 3', description: 'Track Your Progress - Mark tasks as complete and track your progress over time.' }
            ].map((how, idx) => (
              <div key={idx} className="bg-background p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{how.step}</h3>
                <p>{how.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default User;
