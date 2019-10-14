// Module Dependencies
import React from "react";

// Module Component
import ItemMembers from "../ItemMember/ItemMember";

// Module main Component
const ItemContent = props => {
  const { member } = props;
  return (
    <div className="dv-flex-items">
      <div className="dv-ml-1">
        <ItemMembers title="ID" content={member ? member.id : null} />
        <ItemMembers
          title="First name"
          content={member ? member.first_name : null}
        />
        <ItemMembers
          title="Last name"
          content={member ? member.last_name : null}
        />
        <ItemMembers title="Gender" content={member ? member.gender : null} />
        <ItemMembers title="CRP" content={member ? member.crp_id : null} />
        <ItemMembers title="CSPAN" content={member ? member.cspan_id : null} />
        <ItemMembers
          title="Date of birth"
          content={member ? member.date_of_birth : null}
        />
        <ItemMembers
          title="DW Nominate"
          content={member ? member.dw_nominate : null}
        />
        <ItemMembers
          title="Facebook account"
          content={member ? member.facebook_account : null}
        />
        <ItemMembers title="Fax" content={member ? member.fax : null} />
        <ItemMembers
          title="Fec candidate id"
          content={member ? member.fec_candidate_id : null}
        />
        <ItemMembers
          title="Google entity id"
          content={member ? member.google_entity_id : null}
        />
        <ItemMembers
          title="Govtrack id"
          content={member ? member.govtrack_id : null}
        />
        <ItemMembers
          title="Icpsr id"
          content={member ? member.icpsr_id : null}
        />
      </div>
      <div className="dv-ml-2">
        <ItemMembers
          title="Ideal point"
          content={member ? member.ideal_point : null}
        />
        <ItemMembers
          title="In office"
          content={member ? member.in_office : null}
        />
        <ItemMembers
          title="Last updated"
          content={member ? member.last_updated : null}
        />
        <ItemMembers
          title="Leadership role"
          content={member ? member.leadership_role : null}
        />
        <ItemMembers title="Lis id" content={member ? member.lis_id : null} />
        <ItemMembers
          title="Middle name"
          content={member ? member.middle_name : null}
        />
        <ItemMembers
          title="Missed votes"
          content={member ? member.missed_votes : null}
        />
        <ItemMembers
          title="Missed votes pct"
          content={member ? member.missed_votes_pct : null}
        />
        <ItemMembers
          title="Next election"
          content={member ? member.next_election : null}
        />
        <ItemMembers title="Ocd id" content={member ? member.ocd_id : null} />
        <ItemMembers title="Office" content={member ? member.office : null} />

        <ItemMembers title="Party" content={member ? member.party : null} />
        <ItemMembers title="Phone" content={member ? member.phone : null} />
        <ItemMembers title="Rss url" content={member ? member.rss_url : null} />
        <ItemMembers
          title="Senate class"
          content={member ? member.senate_class : null}
        />
      </div>
      <div className="dv-ml-3">
        <ItemMembers
          title="Seniority"
          content={member ? member.seniority : null}
        />
        <ItemMembers
          title="Short title"
          content={member ? member.short_title : null}
        />
        <ItemMembers title="State" content={member ? member.state : null} />
        <ItemMembers
          title="State rank"
          content={member ? member.state_rank : null}
        />
        <ItemMembers title="Suffix" content={member ? member.suffix : null} />
        <ItemMembers title="Title" content={member ? member.title : null} />
        <ItemMembers
          title="Total present"
          content={member ? member.total_present : null}
        />
        <ItemMembers
          title="Total votes"
          content={member ? member.total_votes : null}
        />
        <ItemMembers
          title="Twitter account"
          content={member ? member.twitter_account : null}
        />
        <ItemMembers title="Url" content={member ? member.url : null} />
        <ItemMembers
          title="Votes against party pct"
          content={member ? member.votes_against_party_pct : null}
        />
        <ItemMembers
          title="Votes with party pct"
          content={member ? member.votes_with_party_pct : null}
        />
        <ItemMembers
          title="Votesmart id"
          content={member ? member.votesmart_id : null}
        />
        <ItemMembers
          title="Youtube account"
          content={member ? member.youtube_account : null}
        />
      </div>
    </div>
  );
};

export default ItemContent;
