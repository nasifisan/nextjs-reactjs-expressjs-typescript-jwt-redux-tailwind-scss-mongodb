import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  name: String,
  email: String,
  password: String,
  phone: String,
  last_visit: Date,
  registration_date: Date,
  is_active: Boolean,
  avatar_url: String,
  user_id: String,
});

const tokenMapSchema = new mongoose.Schema(
  {
    refresh_token: String,
    access_token: String,
    expires: Number,
    entry_date: Date,
  },
  { timestamps: true }
);

tokenMapSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });

export const user_model = mongoose.model('users', userSchema);
export const token_model = mongoose.model(
  'accesstokensmaps',
  tokenMapSchema
);
