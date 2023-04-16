<template>
	<AnimatedModal :isOpen="isOpen" middleCenter>
		<div class="z-50 mt-5 rounded-lg bg-white pb-5 sm:w-full lg:w-[800px]">
			<BaseModalHeader title="Terms" @closed="emit('closed')" />
			<div class="c22 bg-white p-8" style="z-index: 999999999999; background: white !important">
				<p class="c8"><span class="c0 c3">ABODE TERMS AND CONDITIONS.</span></p>
				<p class="c8">
					<span class="c1 c0">
						PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY, THEY CONTAIN IMPORTANT INFORMATION AS REGARDS THE CONDITIONS OF
						PURCHASE.
					</span>
				</p>
				<ol class="c14 lst-kix_x9b13aqze8ax-0 start" start="1">
					<li class="c5 li-bullet-0">
						<span class="c0 c3">ABODE ASSETS LIMITED </span>
						<span class="c0">&nbsp;is a&nbsp;</span>
						<span class="c0 c3">Company</span>
						<span class="c2 c0">
							incorporated under the Corporate and Allied Matters Act, 2020 and having its registered office at Akowonjo,
							Lagos State.
						</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The project works under the umbrella of a Cooperative Society called Abode Assets Multi-purpose Cooperative Society.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">All users of Abode are automatically registered as members of the Abode Assets Multi-purpose Cooperative Society.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The &ldquo;</span>
						<span class="c0 c3">PURCHASER</span>
						<span class="c0">&rdquo; as described is any Person(s)/Company/Entity who acquires&nbsp;</span>
						<span class="c0">goods/property</span>
						<span class="c2 c0">&nbsp;from the Company in exchange for consideration.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">&ldquo;</span>
						<span class="c0 c3">GOODS</span>
						<span class="c0">&rdquo; in this document refer to any item of reasonable value purchased from the</span>
						<span class="c0 c3">&nbsp;COMPANY</span>
						<span class="c2 c0">. &nbsp;</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">&ldquo;</span>
						<span class="c0 c3">PROPERTY</span>
						<span class="c0">&rdquo;</span>
						<span class="c2 c0">
							&nbsp;in this document refers to Real Estate, Building or Structure or anything generally attached to a piece of
							land or the Land itself.
						</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c2 c0">
							By accepting the terms listed below, both Parties are bound by the provisions stated in this Terms and
							Conditions.
						</span>
					</li>
					<li class="c11 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;PURCHASER&nbsp;</span>
						<span class="c0">affirms that they are reasonably informed with the knowledge</span>
						<span class="c0">
							&nbsp;that all transactions involving the Company are operated through a technological platform (www.myabode.app).
						</span>
						<span class="c2 c0">.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;COMPANY</span>
						<span class="c0">&nbsp;confirms that all the </span>
						<span class="c0">goods/property</span>
						<span class="c2 c0">
							&nbsp;being sold to the Purchaser is in good condition from all information provided to us by the vendor as at the time of the transaction. &nbsp;
						</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;COMPANY</span>
						<span class="c0">&nbsp;further warrants with regards to any third party goods/property provided by the company to the Purchaser. The COMPANY hereby assigns to the purchaser all warranties and indemnities relating to such third party provided that such assignments are made only to the extent that the Company is permitted to assign to any purchaser. </span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;PURCHASER&nbsp;</span>
						<span class="c0">
							agrees and confirms that they have conducted the requisite search as well as carried out proper due diligence on
							the goods/property and is equally satisfied with its
						</span>
						<span class="c0">title and condition before making payment. These documents are provided on the platform and are available on request at any time.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;PURCHASER&nbsp;</span>
						<span class="c0">commits to making full payment for any of the goods/property purchased from the</span>
						<span class="c1 c0">&nbsp;COMPANY.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;PURCHASER</span>
						<span class="c0">
							&nbsp;undertakes that in the event of their inability to complete payment for the goods/property to the
						</span>
						<span class="c0 c3">&nbsp;COMPANY</span>
						<span class="c2 c0">
							within the stipulated grace period for completion of payment, the price of the goods/property may be subject to
							change at the prevailing market rate or the subscription cancelled.
						</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The</span>
						<span class="c0 c3">&nbsp;PURCHASER&nbsp;</span>
						<span class="c0">undertakes that the payment made to the</span>
						<span class="c0 c3">&nbsp;COMPANY through her designated bank account(s) </span>
						<span class="c0">
							&nbsp;in respect of a particular property personally subscribed to cannot be converted as payment for any other
							product of the
						</span>
						<span class="c0 c3">&nbsp;COMPANY </span>
						<span class="c2 c0">
							 after the transaction has been funded.
						</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Furthermore, in a situation whereby the structure of the ownership of the property is a co-ownership scheme, the </span>
						<span class="c0 c3">PURCHASER </span>
						<span class="c0"> understands that the property can be owned by more than one </span>
						<span class="c0 c3">PURCHASER </span>  
						<span class="c0"> and each ownership is expressed in its individual units.</span>
					</li>
				
					<li class="c5 li-bullet-0">
						<span class="c0">If the Total Funding Target for a project is achieved and the Investment Round completes the asset will be funded and become active.. If the Total Funding Target is not achieved within the relevant time period, a lower asset size can be purchased (e.g half plot instead of full plot) for assets with this possibility provided the such purchaser shall consent to the purchase of a lower asset in writing within 30 days of Notification by the Company, where Consent is required and the Company does not receive a written rejection within 30 days it shall be deemed as implied consent by the Purchaser. However, in a case of assets without this amended possibility and not remedy can be made, all committed funds will be returned, without deduction of any fees or expenses, into your Abode wallet. You can then choose to use the returned funds towards another asset or withdraw the funds from your Abode Account.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">A Co-owner does not have a right to use the entire asset to apply for loan or use a surety or collateral for an agreement.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">&nbsp;The</span>
						<span class="c0 c3">&nbsp;PURCHASER&nbsp;</span>
						<span class="c0">understands that earning on assets are in 2 ways, either capital appreciation on the sale of an asset (goods or property) and rent earned from the usage of an asset (goods or property).</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">All assets on Abode, especially rental assets will be managed by a management company appointed by Abode. The management company will be paid from the income earned from performance of the asset.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Asset Manager will exercise day-to-day control of Property management decisions but Investors shall be requested to vote via the Platform on the following decisions relating to the Property in accordance with this Agreement and the Articles;
 						<br>
 						<br>
						&nbsp; &nbsp; (a)  the approval of any costs of work to the Property with a capital value greater than 10% of &nbsp; &nbsp; the Property annual rental value, which are not a result of an emergency situation or otherwise critical to the liability of the Property					
						<br>
						<br>
						&nbsp; &nbsp; (b)  the appointment and removal of management agents;
						<br>								
						<br>								
						&nbsp; &nbsp; (c)  the sale of an asset and relevant terms (including price and the buyer);
						<br>								
						<br>								
						&nbsp; &nbsp; (d)  the extension of the term of the investment from the term specified on the Platform; and
						<br> <br>
						&nbsp; &nbsp;&nbsp;(e)  the approval of any works to the asset that are expected to take longer than one month to complete during which no rental income shall be earned

						</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">If payments by a tenant/renter are overdue the Manager will endeavour to recover the outstanding amounts. If after one month a tenant is still in default of payment the Manager will advise you and your co-investors of their recommended course of action by the Platform and by email. Courses of action may include legal proceedings against the tenant. Subscribers will vote on the next course of action and where fees to recover the amounts are to be incurred, you and your co-investors will bear the cost.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">In a situation where the management company fails to deliver on projected rental booking within a 90 - 180 day period Abode shall be forced to replace it with another company without waiting for the outcome of a vote.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Rental income is earned from the use of the apartment paid per use by customers and Capital appreciation is earn from growth of the asset based on market performance.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">As a subscriber on the platform, you shall earn from owning shares of an asset whose value (rental or sale) are determined by the market of such asset, e.g prevailing rental value in that location. Interests or rent shall be paid to you as a property co-owner only when the property is rented out or sold.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">At the end of the recommended holding period, the asset will be open to sale by a vote whether by individual subscribers or all subscribers as a group.
</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Once a majority vote is casted to sell any asset, a sales company or individual will be appointed to source for potential buyer and sell the asset at an agreed percentage. Subscribers are also allowed to sell an asset.

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">All payments shall only be settled in the account number or payment details bearing the name or details you have submitted as your KYC information. To change the account you want your payments settled in, certain documentations may be required.</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">There may be a time lag of 15 to 90 working days between the receipt or maturity of Income, capital, appreciation, rent and dividend payouts. Income will be paid directly into your Abode Account. You may then choose to withdraw this money at any time or re-invest in other properties in a similar manner as set out in this Agreement.</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Subscribers are expected to adhere to compliance with our “know your customer” and anti-money laundering regulations within the Federal Republic of Nigeria. This will require you to complete your profile like upload a photograph, government approved identity cards, Bank Verification Number, House Address, employment or business documents and so on. This can be a prerequisite for withdrawal of funds from your wallet or investment in other assets in a similar manner as set out in this Agreement.
</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Personal Data obtained by the COMPANY during the performance of this contract shall be that data which is strictly necessary for the performance of the same and may only be applied or used to fulfil the purpose of the contract.

</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Personal Data will be stored as long as such data is necessary for the purpose of this agreement.
</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Personal Data here under this agreement shall be protected in accordance with the Nigeria Data Protection Regulations (NDPR) and all other extant Laws of the Federal Republic of Nigeria
</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Personal Data of the users shall not be transferred or handed to any third parties other than the government authority with court orders to transfer such data.
</span>


					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The Company shall not be liable for any damages in tort or under criminal code and laws of the federation for such deposits from any Investor which is illegal or questionable.
</span>


					</li>
						
					<li class="c5 li-bullet-0">
						<span class="c0">The Investor assures the Company that the funds used for this investment is not a proceed of crime and warrants that he/she will indemnify the Company for any loss or damage suffered by the Company or its staff arising from any criminal investigations, prosecution by a Law Enforcement Agency or civil claims by a third party arising from the source/means or nature of the Investor’s funds for this Investment.

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The </span>
						<span class="c0 c3">PURCHASER</span>
						<span class="c0"> understands that in a situation whereby the structure of the ownership of the property is a co-ownership scheme, when the </span>
						<span class="c0 c3"> Company </span>
						<span class="c0"> makes a sale of an asset (good/property), the profit from sales of the Good/Property together with the interest/appreciation earned shall be distributed amongst the </span>	
						<span class="c0 c3">Purchasers  </span>
						<span class="c0">	based on the units subscribed to by each Purchaser.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The </span>
						<span class="c0 c3">PURCHASER</span> 
						<span class="c0">understands that sales can be done in the following ways; <br> <br>
a.	A collection sale by the COMPANY if 51% of Property owners vote to sell at the recommended holding period; <br> <br>
b.	Private sales by each user to another user on the platform at any point in time; <br> <br>
It should also be noted that the voting will be open and transparent to all co-owners from 3 months to the end of the recommended holding period. Co-owners who don’t vote within the period, the general decision will be bound to them, and Co-owners shall be charged with any costs incurred in the process of selling or transfer of ownership. 
<br> <br> 
Note: In the case co-owners vote to extend a recommended holding period, the responsibility of sales becomes everyone’s responsibilities (Co-owners and Abode)


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Investors will be contacted via email using the address associated with that investor’s account and will be invited to vote on these decisions within the time period notified to the investor. If we do not receive any response from you within a 15 to 90 day period, you will be deemed to have relinquished your right from the relevant vote. We will send reminders at appropriate intervals via email


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">As a co-owner, you have the right to sell your asset independently at a higher or lower than the current general market price.


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Placing a bid to sell your asset or transfer ownership of your asset, you agree to transfer the total ownership of the asset at a price to a new owner who is regarded in this case buyer.


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Placing a bid to buy an asset, you agreed to receive the asset from the seller in exchange for a price to be paid by you.

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">Buying, selling and transfer of ownership of assets shall be done via the Abode Platform. This transaction is chargeable 
</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The </span>
						<span class="c0 c3">PURCHASER</span> 
						<span class="c0"> undertakes that all payments made in respect of the goods/property advertised by the Company must be made 
							into the designated Bank Accounts of the <span class="c0 c3">COMPANY</span> in favour of Abode Assets Limited which will be provided on our 
							platform to the <span class="c0 c3">PURCHASER</span>.

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The <span class="c0 c3">PURCHASER</span> undertakes that the <span class="c0 c3">COMPANY</span> 
						shall not be liable for any payment made to a third party’s account or the personal account of any other person, staff, agent, 
						marketer in the employ of the <span class="c0 c3">COMPANY</span> as such transactions are done at the exclusive risk of the <span class="c0 c3">PURCHASER</span>. 

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0"> The <span class="c0 c3">PURCHASER</span> agrees that the payment for goods/property purchased from the <span class="c0 c3">COMPANY</span> is exclusive of Insurance, documentation and development fees (where applicable respectively as that will be distinctly catered for subsequently on a separate invoice if there arise any critical requirement for it. It should be noted that assble) ets with such requirements will be clearly stated with the product information if required.

</span>
					</li>
						<li class="c5 li-bullet-0">
						<span class="c0">The <span class="c0 c3">PURCHASER</span> will only be entitled to a refund <span class="c0 c3">if there is an undisclosed physical defect</span> on the goods purchased from the <span class="c0 c3">COMPANY</span> and this defect must be reported to the Company within <span class="c0 c3">7 days</span>. If 7 days have passed since your purchase, you will not be entitled a refund of any kind. 

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0"> The <span class="c0 c3">PURCHASER</span> confirms that they are aware that the Project Purchase Form, Certificate of Investment and Asset Allocation letter provided by the Company to the Purchaser are contractual legal documents in relation to any transaction involving the <span class="c0 c3">COMPANY</span> and are therefore binding on both parties.


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0"> Assets on Abode can be inherited by an immediate family members or the spouse recognised by law; Co-Owners who desire to exercise this right are required to fill in the next of kin details and necessary valid identification in the profile section. In the case of the demise of a customer, the next of kin shall assume the ownership of the asset and benefit after presenting appropriate documents to confirm this


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">The next of kin to inherit this transaction must not have any unresolved legal case especially in relation to the incapacitation or eventual death of the asset owner
 

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0"> If the performance of this Agreement or any obligation under it is prevented, restricted or interfered with by reason of a Force Majeure event like Riot, Unrest, Pandemic, War, Macro Economic Crisis e.t.c, the Party so affected shall promptly notify the other Party in writing of the existence of the Force Majeure event, the anticipated length of delay, the cause of the delay and a timetable by which any remedial measures will be implemented. If the Force Majeure event continues for a period of (15) days & above, then during that period, the Agreement shall be considered as suspended. Upon the end of the Force Majeure event, the contractual obligations of the Parties shall be reinstated with such reasonable modifications to take account of the consequences of the Force Majeure event as may be agreed by the Parties, or in default of such agreement, as may be determined by an expert or court of competent jurisdiction. 

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0"> The Subscribers understand that Investment is speculative and has its own risks. Macroeconomic scenarios can happen to affect and the market value of a Property or asset can fall, and rental income can be affected. You must be prepared to invest for the full investment period, owing to a lack of market for the asset interest. Sale of the asset at the end of the Investment Term can be affected too.


</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">We wish to draw your attention to the risks relating to investing. Please note that the distribution of income depends on many factors (such as whether there is a tenant for the Asset or Property). The value of asset may go down as well as up and the past performance of any investment is not an indicator of future performance nor is a forecast a reliable indicator of future performance. income will be paid based on total rent less fees including but not limited to: service charges, management fees, maintenance and insurance. You will be provided with a full breakdown of these at the time of making your investment and on an ongoing basis on the Platform.
 

</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">In the unlikely circumstance where a platform failure occurs, for example in the case of a natural disaster in close proximity to Abode’s place of operation or system hack or an asset is destroyed, stolen or damaged so that it cannot perform to pay investors, Abode’s Business Continuity Plan <span class="c0 c3">(BCP)</span> will be initiated.
						<br> <br> 
						&nbsp;&nbsp;&nbsp;&nbsp; - Abode’s BCP is designed to facilitate effective communication during any disaster; explore risk & available insurance provisions; and to expedite the recovery of the Firm’s business critical functions and data so that it can resume “business as usual” as soon as possible.
						<br><br>
 						&nbsp;&nbsp;&nbsp;&nbsp; - Clients will be kept up to date of any active investments or transactions via telephone, chats and email.

</span>
					</li>





					
					<li class="c11 li-bullet-0">
						<span class="c0">In making an investment you agree that you have done so solely based on information contained on the Platform, together with any independent knowledge that you may have and professional advice that you may have received. Nothing we have done, nor anything that is on the Platform, is to be construed as advice or a recommendation by us in relation to an investment. You agree that you have complete control and discretion as to whether or not you invest through the Platform.</span>
					</li>
					<li class="c5 li-bullet-0">
						<span class="c0">If you have any questions or concerns, please send an email to</span>
						<span class="c0 c15 ml-1">info@myabodeapp.app.</span>
						<span class="c2 c0">&nbsp;Thank you for reading our Terms and Conditions and using our services.</span>
					</li>
				</ol>
				<p class="c8">
					<span class="c0 c3">I/WE</span>
					<span class="c2 c0">
						have read through the above terms and conditions and having perfectly understood the contents hereby give my consent
						to it by clicking the agree button:
					</span>
				</p>
				<p class="c12"><span class="c2 c0"></span></p>
				<p class="c13"><span class="c2 c0"></span></p>

				<div class="w-100 mt-8 flex justify-end bg-white">
					<BaseButton
						class="mr-5 border border-black bg-white px-8 text-sm text-black"
						textColor="black"
						bgColor="white"
						@click="emit('closed')"
					>
						Disagree
					</BaseButton>
					<BaseButton class="bg-orange px-8 text-sm" @click="emit('completed')">Agree</BaseButton>
				</div>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from './AnimatedModal.vue';
import BaseButton from './BaseButton.vue';
import BaseModalHeader from './BaseModalHeader.vue';

defineProps<{ isOpen: boolean }>();

const emit = defineEmits(['closed', 'completed']);
</script>

<style type="text/css">
ol.lst-kix_t2bk5l4tlf3v-5.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-5 0;
}

.lst-kix_t2bk5l4tlf3v-8 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-8;
}

.lst-kix_x9b13aqze8ax-5 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-5;
}

ol.lst-kix_t2bk5l4tlf3v-8.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-8 0;
}

.lst-kix_x9b13aqze8ax-4 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-4;
}

.lst-kix_t2bk5l4tlf3v-4 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-4, lower-latin) '. ';
}

.lst-kix_t2bk5l4tlf3v-3 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-3, decimal) '. ';
}

ol.lst-kix_t2bk5l4tlf3v-2.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-2 0;
}

.lst-kix_t2bk5l4tlf3v-1 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-1, lower-latin) '. ';
}

.lst-kix_t2bk5l4tlf3v-0 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-0, decimal) '. ';
}

.lst-kix_t2bk5l4tlf3v-2 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-2, lower-roman) '. ';
}

ul.lst-kix_y4rqkkwqleia-1 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-0 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-3 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-2 {
	list-style-type: none;
}

.lst-kix_x9b13aqze8ax-3 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-3;
}

ol.lst-kix_t2bk5l4tlf3v-2 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-3 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-0 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-1 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-6 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-7 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-8 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-4 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-5 {
	list-style-type: none;
}

.lst-kix_t2bk5l4tlf3v-7 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-7;
}

ul.lst-kix_y4rqkkwqleia-5 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-4 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-8 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-7 {
	list-style-type: none;
}

ul.lst-kix_y4rqkkwqleia-6 {
	list-style-type: none;
}

.lst-kix_x9b13aqze8ax-6 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-6;
}

ol.lst-kix_x9b13aqze8ax-8 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-6 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-7 {
	list-style-type: none;
}

.lst-kix_t2bk5l4tlf3v-5 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-5;
}

ol.lst-kix_t2bk5l4tlf3v-3.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-3 0;
}

.lst-kix_x9b13aqze8ax-1 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-1;
}

.lst-kix_x9b13aqze8ax-7 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-7;
}

ol.lst-kix_x9b13aqze8ax-3.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-3 0;
}

ol.lst-kix_x9b13aqze8ax-0 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-1 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-4 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-5 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-2 {
	list-style-type: none;
}

ol.lst-kix_x9b13aqze8ax-3 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-4.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-4 0;
}

.lst-kix_t2bk5l4tlf3v-5 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-5, lower-roman) '. ';
}

.lst-kix_t2bk5l4tlf3v-6 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-6, decimal) '. ';
}

.lst-kix_t2bk5l4tlf3v-7 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-7, lower-latin) '. ';
}

.lst-kix_t2bk5l4tlf3v-8 > li:before {
	content: '' counter(lst-ctn-kix_t2bk5l4tlf3v-8, lower-roman) '. ';
}

ol.lst-kix_x9b13aqze8ax-4.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-4 0;
}

.lst-kix_t2bk5l4tlf3v-2 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-2;
}

ol.lst-kix_x9b13aqze8ax-8.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-8 0;
}

ol.lst-kix_x9b13aqze8ax-0.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-0 0;
}

.lst-kix_t2bk5l4tlf3v-3 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-3;
}

.lst-kix_t2bk5l4tlf3v-1 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-1;
}

.lst-kix_y4rqkkwqleia-6 > li:before {
	content: '\0025cf  ';
}

.lst-kix_y4rqkkwqleia-8 > li:before {
	content: '\0025a0  ';
}

.lst-kix_t2bk5l4tlf3v-4 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-4;
}

ol.lst-kix_x9b13aqze8ax-5.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-5 0;
}

.lst-kix_y4rqkkwqleia-7 > li:before {
	content: '\0025cb  ';
}

.lst-kix_x9b13aqze8ax-0 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-0;
}

.lst-kix_y4rqkkwqleia-4 > li:before {
	content: '\0025cb  ';
}

.lst-kix_y4rqkkwqleia-5 > li:before {
	content: '\0025a0  ';
}

ol.lst-kix_x9b13aqze8ax-2.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-2 0;
}

.lst-kix_y4rqkkwqleia-0 > li:before {
	content: '  ';
}

.lst-kix_y4rqkkwqleia-3 > li:before {
	content: '\0025cf  ';
}

ol.lst-kix_t2bk5l4tlf3v-6.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-6 0;
}

.lst-kix_y4rqkkwqleia-2 > li:before {
	content: '\0025a0  ';
}

.lst-kix_y4rqkkwqleia-1 > li:before {
	content: '\0025cb  ';
}

ul.lst-kix_n5zoitluvun9-0 {
	list-style-type: none;
}

ul.lst-kix_n5zoitluvun9-1 {
	list-style-type: none;
}

ul.lst-kix_n5zoitluvun9-2 {
	list-style-type: none;
}

ul.lst-kix_n5zoitluvun9-3 {
	list-style-type: none;
}

ul.lst-kix_n5zoitluvun9-4 {
	list-style-type: none;
}

ul.lst-kix_n5zoitluvun9-5 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-0.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-0 0;
}

ul.lst-kix_n5zoitluvun9-6 {
	list-style-type: none;
}

.lst-kix_x9b13aqze8ax-8 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-8;
}

.lst-kix_x9b13aqze8ax-2 > li {
	counter-increment: lst-ctn-kix_x9b13aqze8ax-2;
}

.lst-kix_n5zoitluvun9-5 > li:before {
	content: '\0025a0  ';
}

ol.lst-kix_x9b13aqze8ax-6.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-6 0;
}

.lst-kix_n5zoitluvun9-4 > li:before {
	content: '\0025cb  ';
}

ol.lst-kix_t2bk5l4tlf3v-7.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-7 0;
}

.lst-kix_t2bk5l4tlf3v-0 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-0;
}

.lst-kix_n5zoitluvun9-6 > li:before {
	content: '\0025cf  ';
}

.lst-kix_n5zoitluvun9-7 > li:before {
	content: '\0025cb  ';
}

.lst-kix_t2bk5l4tlf3v-6 > li {
	counter-increment: lst-ctn-kix_t2bk5l4tlf3v-6;
}

.lst-kix_n5zoitluvun9-8 > li:before {
	content: '\0025a0  ';
}

.lst-kix_x9b13aqze8ax-0 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-0, decimal) '. ';
}

.lst-kix_x9b13aqze8ax-2 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-2, lower-roman) '. ';
}

.lst-kix_x9b13aqze8ax-1 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-1, lower-latin) '. ';
}

.lst-kix_x9b13aqze8ax-3 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-3, decimal) '. ';
}

li.li-bullet-0:before {
	margin-left: -18pt;
	white-space: nowrap;
	display: inline-block;
	min-width: 18pt;
}

.lst-kix_x9b13aqze8ax-6 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-6, decimal) '. ';
}

.lst-kix_x9b13aqze8ax-5 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-5, lower-roman) '. ';
}

.lst-kix_x9b13aqze8ax-7 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-7, lower-latin) '. ';
}

.lst-kix_n5zoitluvun9-1 > li:before {
	content: '\0025cb  ';
}

.lst-kix_n5zoitluvun9-3 > li:before {
	content: '\0025cf  ';
}

ol.lst-kix_x9b13aqze8ax-1.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-1 0;
}

.lst-kix_x9b13aqze8ax-4 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-4, lower-latin) '. ';
}

.lst-kix_x9b13aqze8ax-8 > li:before {
	content: '' counter(lst-ctn-kix_x9b13aqze8ax-8, lower-roman) '. ';
}

ol.lst-kix_x9b13aqze8ax-7.start {
	counter-reset: lst-ctn-kix_x9b13aqze8ax-7 0;
}

.lst-kix_n5zoitluvun9-2 > li:before {
	content: '\0025a0  ';
}

ul.lst-kix_n5zoitluvun9-7 {
	list-style-type: none;
}

ul.lst-kix_n5zoitluvun9-8 {
	list-style-type: none;
}

ol.lst-kix_t2bk5l4tlf3v-1.start {
	counter-reset: lst-ctn-kix_t2bk5l4tlf3v-1 0;
}

.lst-kix_n5zoitluvun9-0 > li:before {
	content: '\0025cf  ';
}

ol {
	margin: 0;
	padding: 0;
}

table td,
table th {
	padding: 0;
}

.c12 {
	border-right-style: solid;
	padding-top: 0pt;
	border-top-width: 0pt;
	border-right-width: 0pt;
	padding-left: -22pt;
	padding-bottom: 0pt;
	line-height: 1.15;
	border-left-width: 0pt;
	border-top-style: solid;
	margin-left: 85pt;
	text-indent: -22pt;
	border-left-style: solid;
	border-bottom-width: 0pt;
	border-bottom-style: solid;
	orphans: 2;
	widows: 2;
	text-align: justify;
	padding-right: 0pt;
	height: 11pt;
}

.c11 {
	border-right-style: solid;
	padding-top: 0pt;
	border-top-width: 0pt;
	border-right-width: 0pt;
	padding-left: 0pt;
	padding-bottom: 0pt;
	line-height: 1.15;
	border-left-width: 0pt;
	border-top-style: solid;
	margin-left: 36pt;
	border-left-style: solid;
	border-bottom-width: 0pt;
	border-bottom-style: solid;
	orphans: 2;
	widows: 2;
	text-align: justify;
	padding-right: 0pt;
}

.c10 {
	border-right-style: solid;
	padding-top: 0pt;
	border-top-width: 0pt;
	border-right-width: 0pt;
	padding-left: -18pt;
	padding-bottom: 0pt;
	line-height: 1.15;
	border-left-width: 0pt;
	border-top-style: solid;
	border-left-style: solid;
	border-bottom-width: 0pt;
	border-bottom-style: solid;
	orphans: 2;
	widows: 2;
	text-align: justify;
	padding-right: 0pt;
}

.c5 {
	margin-left: 36pt;
	padding-top: 12pt;
	padding-left: 0pt;
	padding-bottom: 21pt;
	line-height: 1.15;
	orphans: 2;
	widows: 2;
	text-align: justify;
}

.c13 {
	padding-top: 0pt;
	padding-bottom: 0pt;
	line-height: 1.15;
	orphans: 2;
	widows: 2;
	text-align: justify;
	height: 11pt;
}

.c8 {
	padding-top: 0pt;
	padding-bottom: 9pt;
	line-height: 1.15;
	orphans: 2;
	widows: 2;
	text-align: justify;
}

.c2 {
	color: #000000;
	font-weight: 400;
	text-decoration: none;
	vertical-align: baseline;
	font-family: 'Arial';
	font-style: normal;
}

.c1 {
	color: #000000;
	font-weight: 700;
	text-decoration: none;
	vertical-align: baseline;
	font-family: 'Arial';
	font-style: normal;
}

.c9 {
	padding-top: 0pt;
	padding-bottom: 0pt;
	line-height: 1;
	text-align: left;
}

.c4 {
	background-color: #ffffff;
	max-width: 451.4pt;
	padding: 72pt 72pt 72pt 72pt;
}

.c14 {
	padding: 0;
	margin: 0;
}

.c7 {
	border: 1px solid black;
	margin: 5px;
}

.c0 {
	font-size: 12pt;
}

.c6 {
	font-size: 11pt;
}

.c3 {
	font-weight: 700;
}

.c15 {
	color: #0b4cb4;
}

.title {
	padding-top: 0pt;
	color: #000000;
	font-size: 26pt;
	padding-bottom: 3pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

.subtitle {
	padding-top: 0pt;
	color: #666666;
	font-size: 15pt;
	padding-bottom: 16pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

li {
	color: #000000;
	font-size: 11pt;
	font-family: 'Arial';
}

p {
	margin: 0;
	color: #000000;
	font-size: 11pt;
	font-family: 'Arial';
}

h1 {
	padding-top: 20pt;
	color: #000000;
	font-size: 20pt;
	padding-bottom: 6pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

h2 {
	padding-top: 18pt;
	color: #000000;
	font-size: 16pt;
	padding-bottom: 6pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

h3 {
	padding-top: 16pt;
	color: #434343;
	font-size: 14pt;
	padding-bottom: 4pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

h4 {
	padding-top: 14pt;
	color: #666666;
	font-size: 12pt;
	padding-bottom: 4pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

h5 {
	padding-top: 12pt;
	color: #666666;
	font-size: 11pt;
	padding-bottom: 4pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	orphans: 2;
	widows: 2;
	text-align: left;
}

h6 {
	padding-top: 12pt;
	color: #666666;
	font-size: 11pt;
	padding-bottom: 4pt;
	font-family: 'Arial';
	line-height: 1.15;
	page-break-after: avoid;
	font-style: italic;
	orphans: 2;
	widows: 2;
	text-align: left;
}
</style>
