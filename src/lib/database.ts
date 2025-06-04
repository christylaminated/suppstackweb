import supabase from "./supabase";

// User related operations
export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  
  return { data, error };
}

export async function updateUser(id: string, userData: any) {
  const { data, error } = await supabase
    .from('users')
    .update(userData)
    .eq('id', id)
    .select();
  
  return { data, error };
}

// Profile related operations
export async function getProfileByUserId(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  return { data, error };
}

export async function createProfile(profileData: any) {
  const { data, error } = await supabase
    .from('profiles')
    .insert(profileData)
    .select();
  
  return { data, error };
}

export async function updateProfile(userId: string, profileData: any) {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('user_id', userId)
    .select();
  
  return { data, error };
}

// Generic database operations
export async function fetchData(table: string, query: any = {}) {
  let queryBuilder = supabase.from(table).select('*');
  
  // Apply filters if provided
  if (query.filters) {
    Object.entries(query.filters).forEach(([key, value]) => {
      queryBuilder = queryBuilder.eq(key, value);
    });
  }
  
  // Apply pagination
  if (query.limit) {
    queryBuilder = queryBuilder.limit(query.limit);
  }
  
  if (query.offset) {
    queryBuilder = queryBuilder.range(query.offset, query.offset + (query.limit || 10) - 1);
  }
  
  const { data, error } = await queryBuilder;
  return { data, error };
}

export async function insertData(table: string, data: any) {
  const { data: result, error } = await supabase
    .from(table)
    .insert(data)
    .select();
  
  return { data: result, error };
}

export async function updateData(table: string, id: string, data: any) {
  const { data: result, error } = await supabase
    .from(table)
    .update(data)
    .eq('id', id)
    .select();
  
  return { data: result, error };
}

export async function deleteData(table: string, id: string) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id);
  
  return { error };
}
