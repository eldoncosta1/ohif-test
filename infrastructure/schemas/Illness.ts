import { z } from 'zod';

export const illnessType = ['NoIllness', 'MildIllness', 'AdvancedIllness'] as const;

export const IllnessTypeSchema = z.enum(illnessType);

export type IllnessDTO = (typeof illnessType)[number];
