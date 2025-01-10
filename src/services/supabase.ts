import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type VideoRow = {
  id: string;
  url: string;
  type: 'youtube' | 'vimeo';
  video_id: string;
  title: string;
  subtitle?: string;
  thumbnail?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
};

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('order_index');
  
  if (error) throw error;
  return data as VideoRow[];
};

export const addVideo = async (video: Omit<VideoRow, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('videos')
    .insert(video)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateVideo = async (id: string, updates: Partial<VideoRow>) => {
  const { data, error } = await supabase
    .from('videos')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteVideo = async (id: string) => {
  const { error } = await supabase
    .from('videos')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

export const reorderVideos = async (videos: { id: string; order_index: number }[]) => {
  const { error } = await supabase
    .from('videos')
    .upsert(
      videos.map(({ id, order_index }) => ({
        id,
        order_index,
        updated_at: new Date().toISOString(),
      }))
    );
  
  if (error) throw error;
};