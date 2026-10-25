import { describe, expect, it } from 'vitest';
import {
  createAgentAvatarProfileFromSeed,
  normalizeAgentAvatarProfile,
} from '@/lib/avatars/profile';

describe('avatar custom colors', () => {
  it('accepts custom hex color values in normalizeAgentAvatarProfile', () => {
    const base = createAgentAvatarProfileFromSeed('test-seed');
    const custom = normalizeAgentAvatarProfile(
      {
        ...base,
        hair: { ...base.hair, color: '#123456' },
        clothing: { ...base.clothing, topColor: '#abcdef' },
      },
      'test-seed',
    );
    expect(custom.hair.color).toBe('#123456');
    expect(custom.clothing.topColor).toBe('#abcdef');
  });
});
