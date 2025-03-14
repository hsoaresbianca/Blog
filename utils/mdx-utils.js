import supabase from './supabase';

export const getPosts = async () => {
    const {data, error} = await supabase
    .from ('posts')
    .select('*');

    if(error){
        conseole.error('Error fetching posts:', error);
    }

    return data;
}

export const getPostBySlug = async (id) => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
    if (error) {
        console.error('Error fetching post:', error);
        return {};
    }
    return data;
};