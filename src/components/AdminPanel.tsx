import React, { useState } from 'react';
import VideoGrid from './VideoGrid';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const { toast } = useToast();
  const [aboutContent, setAboutContent] = useState({
    title: "About Me",
    description: "I am a creative professional specializing in video production and visual storytelling.",
    email: "karl@inde.se",
    location: "Stockholm, Sweden",
    instagram: "@bakgator"
  });

  const handleContentSave = () => {
    toast({
      title: "Content updated",
      description: "Your changes have been saved successfully."
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        
        <div className="flex space-x-4 mb-8">
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
            <h2 className="text-xl font-semibold mb-4">Manage Videos</h2>
            <VideoGrid isAdmin={true} />
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Manage Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">About Title</label>
                <Input
                  value={aboutContent.title}
                  onChange={(e) => setAboutContent({...aboutContent, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">About Description</label>
                <Textarea
                  value={aboutContent.description}
                  onChange={(e) => setAboutContent({...aboutContent, description: e.target.value})}
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  value={aboutContent.email}
                  onChange={(e) => setAboutContent({...aboutContent, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Input
                  value={aboutContent.location}
                  onChange={(e) => setAboutContent({...aboutContent, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Instagram Handle</label>
                <Input
                  value={aboutContent.instagram}
                  onChange={(e) => setAboutContent({...aboutContent, instagram: e.target.value})}
                />
              </div>
              <Button onClick={handleContentSave} className="mt-4">
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;