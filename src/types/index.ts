// TypeScript 类型定义

// 主讲嘉宾类型
export interface KeynoteSpeaker {
  id: number
  name: string
  title: string
  bio: string
  imageUrl: string
  topic: string
}

// 会议主题类型
export interface Theme {
  id: number
  title: string
  description: string
  imageUrl?: string
}

// 议程项类型
export interface ProgrammeItem {
  id: number
  time: string
  title: string
  speaker?: string
  location: string
  description: string
}

// 组织委员会成员类型
export interface CommitteeMember {
  id: number
  name: string
  role: string
  organization: string
  email?: string
}

// 酒店信息类型
export interface Hotel {
  id: number
  name: string
  address: string
  distance: string
  priceRange: string
  website?: string
}

// 联系信息类型
export interface ContactInfo {
  email: string
  phone: string
  address: string
  website?: string
}

