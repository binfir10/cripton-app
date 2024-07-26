import Companies from '@/components/section/Companies'
import Hero from '@/components/section/Hero'
import Adventaje from '@/components/section/adventaje'
import DistributerTeam from '@/components/section/distributer-team'
import FeaturesPremium from '@/components/section/features-premium'
import TeamMembers from '@/components/section/team-members'
import Testimonials from '@/components/section/testimonials'
import UserCentric from '@/components/section/user-centric'
import Viewing from '@/components/section/viewing'

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <Adventaje />
      <FeaturesPremium />
      <TeamMembers />
      <UserCentric />
      <Viewing />
      <Testimonials />
      <DistributerTeam />
    </div>
  )
}
