import React, { useState } from 'react';
import { VideoGrid } from './VideoGrid';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      
      <div className="space-x-4 mb-8">
        <button 
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-2 rounded ${activeTab === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Videos
        </button>
        <button 
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2 rounded ${activeTab === 'content' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Content
        </button>
      </div>

      {activeTab === 'videos' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Videos</h2>
          {/* Video management will be implemented here */}
        </div>
      )}

      {activeTab === 'content' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Content</h2>
          {/* Content management will be implemented here */}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;