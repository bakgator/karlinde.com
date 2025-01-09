import React, { useState } from 'react';
import VideoGrid from './VideoGrid';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Admin Panel</h1>
        
        <div className="space-x-4 mb-8">
          <button 
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'videos' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
          >
            Videos
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'content' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
          >
            Content
          </button>
        </div>

        {activeTab === 'videos' && (
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Manage Videos</h2>
            <VideoGrid />
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Manage Content</h2>
            <p className="text-muted-foreground">Content management features coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;