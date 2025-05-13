import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      return res.status(500).json({
        message: 'Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_ANON_KEY.',
      });
    }

    const { data, error } = await supabase
      .from('funds')
      .select('*');

    if (error) {
      console.error("Supabase query error:", error);
      return res.status(500).json({ message: 'Database query failed', error });
    }

    // 格式化结果
    const result = {};
    data.forEach(entry => {
      result[entry.type] = entry.amount;
    });

    res.status(200).json(result);

  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
}
